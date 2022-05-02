import { Schema, checkSchema } from "express-validator";

// Express validation wrapper
import expressValidationWrapper from "../../helpers/expressValidationWrapper-helper";

// User data schema
import userSchema from "../../schemas/user-schema";

// Schema for the login credentials
const loginCredentialsSchema: Schema = {
    email: {
        trim: true,
        notEmpty: { errorMessage: "E-mail is empty" }
    },
    password: {
        trim: true,
        notEmpty: { errorMessage: "Password is empty" }
    }
}

// User data on signup validator
const validateSignupUser = expressValidationWrapper(checkSchema(userSchema));

// Login credentials validator middleware
const validateLoginCredentials = expressValidationWrapper(checkSchema(loginCredentialsSchema), "Empty fields error");

export { validateSignupUser, validateLoginCredentials };