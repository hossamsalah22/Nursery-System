const { body } = require("express-validator");

module.exports = [
	body("id").isMongoId().withMessage("Teacher Id Must Be included"),
	body("fullName").optional().isString().withMessage("Teacher Name should be string"),
	body("password").optional().isAlphanumeric().withMessage("Password Must Be Hybird").isLength({ Min: 4 }).withMessage("Password must be > 8"),
	body("email").optional().isEmail().withMessage("Email is Invalid"),
	body("image").optional().isString().withMessage("Image is Invalid"),
];
