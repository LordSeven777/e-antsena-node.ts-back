import path from "path";
import jwt, { SignOptions, JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

// The redis client
import redisClient from "../../redisClient";

// Type for the token type
import TokenType from "../../types/TokenType-type";

// Accessing environment variables (for local development)
dotenv.config({ path: path.join(__dirname, "../", ".env") });

// Helper method for getting the secret key
function getSecretKey(type: TokenType): string {
    /* Different secret keys depending on the token type */
    const secretkey = type === 'access'
        ? process.env.ACCESS_TOKEN_SECRET_KEY
        : process.env.REFRESH_TOKEN_SECRET_KEY;
    return secretkey || "secretKey"; // Default secret key to 'secretKey'
}

// Class for the auth service
class AuthService {

    // Generates a jwt for a user *********************************************
    async generateUserToken(payload: Object, type: TokenType) {
        const secretkey = getSecretKey(type);

        /* An access token expires after 3days
        ** whereas a refresh token has no expiration date */
        const expiration = { expiresIn: '3d' };

        // JWT sign params
        const params: [object, string, SignOptions | undefined] = [
            payload,
            secretkey,
            expiration
        ];

        return jwt.sign(...params);
    }


    // Verifies a user token **************************************************
    verifyUserToken(token: string, type: TokenType): Promise<string | JwtPayload | undefined> {
        return new Promise((resolve, reject) => {
            const secretKey = getSecretKey(type);
            jwt.verify(token, secretKey, (err, user) => {
                if (err) reject(err);
                else resolve(user);
            });
        });
    }


    // Stores a refresh token *************************************************
    async storeRefreshToken(token: string) {
        await redisClient.sAdd('refreshTokens', token);
    }


    // Checks if a refresh token exists ***************************************
    async checkIfRefreshTokenExists(token: string) {
        return redisClient.sIsMember('refreshTokens', token);
    }


    // Deletes a refresh token ************************************************
    async deleteRefreshToken(token: string) {
        return redisClient.sRem('refreshTokens', token);
    };

}

export default new AuthService();