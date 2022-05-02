import path from "path";
import jwt, { SignOptions, JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

// Accessing environment variables (for local development)
dotenv.config({ path: path.join(__dirname, "../", ".env") });

// Type for the token type
type TokenType = "access" | "refresh";

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
        const expiration = type === 'access' ? { expiresIn: '3d' } : undefined;

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

}

export default new AuthService();