import path from "path";
import jwt, { SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";

// Accessing environment variables (for local development)
dotenv.config({ path: path.join(__dirname, "../", ".env") });

// Type for the token type
type TokenType = "access" | "refresh";

// Class for the auth service
class AuthService {

    // Generates a jwt for a user
    async generateUserToken(payload: Object, type: TokenType) {
        /* Different secret keys depending on the token type */
        const secretkey = type === 'access'
            ? process.env.ACCESS_TOKEN_SECRET_KEY
            : process.env.REFRESH_TOKEN_SECRET_KEY;

        /* An access token expires after 3days
        ** whereas a refresh token has no expiration date */
        const expiration = type === 'access' ? { expiresIn: '3d' } : undefined;

        // JWT sign params
        const params: [object, string, SignOptions | undefined] = [
            payload,
            secretkey || "secretKey", // Default secret key to 'secretKey'
            expiration
        ];

        return jwt.sign(...params);
    }

}

export default new AuthService();