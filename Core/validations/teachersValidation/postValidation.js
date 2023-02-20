const { body } = require("express-validator");

module.exports = [
	body("id").isMongoId().withMessage("Teacher Id should be Object"),
	body("fullName").isString().withMessage("Teacher Name should be string"),
	body("password").isAlphanumeric().withMessage("Password Must Be Hybird").isLength({ Min: 4 }).withMessage("Password must be > 8"),
	body("email").isEmail().withMessage("Email is Invalid"),
	body("image").isString().withMessage("Image is Invalid"),
];
