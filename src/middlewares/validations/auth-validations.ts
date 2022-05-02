import { checkSchema } from "express-validator";

// Express validation wrapper
import expressValidationWrapper from "../../helpers/expressValidationWrapper-helper";

// User data schema
import userSchema from "../../schemas/user-schema";

// User data on signup validator
const validateSignupUser = expressValidationWrapper(checkSchema(userSchema));

export { validateSignupUser };