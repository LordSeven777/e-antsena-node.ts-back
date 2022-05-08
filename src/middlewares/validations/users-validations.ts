import { checkSchema } from "express-validator";
import bcrypt from "bcrypt";

// Express validation wrapper
import expressValidationWrapper from "../../helpers/expressValidationWrapper-helper";

// User data schema
import userSchema from "../../schemas/user-schema";

// Users service
import usersService from "../../api/users/users-service";

// Validates the user's identity data
const validateUserIdentityData = expressValidationWrapper(checkSchema({
    firstname: userSchema.firstname,
    lastname: userSchema.lastname,
    gender: userSchema.gender,
}));

// Validates the user's email data
const validateUserEmailData = expressValidationWrapper(checkSchema({ email: userSchema.email }));

// Validates the user's password data on edit
const validateUserPasswordData = expressValidationWrapper(checkSchema({
    password: userSchema.password,
    passwordConfirmation: userSchema.passwordConfirmation,
    currentPassword: {
        notEmpty: { errorMessage: "Current password is empty" },
        custom: {
            async options(currentPassword, { req }) {
                const user = await usersService.getUser(req.params?.userId, true, true);
                /* In case the user does no exist, we don't throw the error here
                ** since we want the 404 error to be handled in the controller's side */
                if (!user) return true;
                if (!await bcrypt.compare(currentPassword, user.password))
                    throw new Error("Current password is wrong");
                return true;
            }
        }
    }
}));

export { validateUserIdentityData, validateUserEmailData, validateUserPasswordData };