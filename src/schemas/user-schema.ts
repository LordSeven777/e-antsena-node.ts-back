import { Schema } from "express-validator";

// Users service
import { usersService } from "../api/users";

// Regex for the valid user name
const validUsernameSchema = /^('?[A-z]+'?\s?)+$/;

// The user schema object
/*
** Schema for the user attributes provided by any request intended to */
const userSchema: Schema = {
    firstname: {
        trim: true,
        notEmpty: { errorMessage: "First name is empty" },
        matches: {
            options: validUsernameSchema,
            errorMessage: "First name is not valid"
        },
        isLength: {
            options: { min: 2, max: 50 },
            errorMessage: "First name must be 2 to 50 characters length"
        },
    },
    lastname: {
        trim: true,
        notEmpty: { errorMessage: "Last name is empty" },
        matches: {
            options: validUsernameSchema,
            errorMessage: "Last name is not valid"
        },
        isLength: {
            options: { min: 2, max: 30 },
            errorMessage: "Last name must be 2 to 30 characters length"
        }
    },
    gender: {
        trim: true,
        toUpperCase: true,
        notEmpty: { errorMessage: "Gender is empty" },
        matches: {
            options: /^(M|F){1}$/,
            errorMessage: "Gender must either 'M' or 'F'"
        }
    },
    email: {
        trim: true,
        notEmpty: { errorMessage: "E-mail address is empty" },
        isEmail: { errorMessage: "E-mail address is not valid" },
        custom: {
            // Email must be unique
            async options(email) {
                if (await usersService.checkIfEmailExists(email))
                    throw new Error("E-mail is already being used");
                return true;
            }
        }
    },
    password: {
        trim: true,
        notEmpty: { errorMessage: "Password is empty" },
        isStrongPassword: {
            errorMessage: "Password must have at leat 8 characters and must contain at least 1 lowercase, 1 uppercase, and 1 special character"
        }
    },
    passwordConfirmation: {
        trim: true,
        notEmpty: { errorMessage: "Password confirmation is empty" },
        custom: {
            options(passwordConfirmation, { req }) {
                const { password } = req.body;
                if (!password) return true; // Not throwing an error until the password is filled
                if (passwordConfirmation !== password)
                    throw new Error("Password confirmation is wrong");
                return true;
            }
        }
    }
}

export default userSchema;