const { body } = require("express-validator");

module.exports = [
	body("id").isNumeric().withMessage("Class Id should be Entered"),
	body("fullName").isString().withMessage("Class Name should be string"),
	body("supervisor").isInt().withMessage("Teacher Id Is Invalid"),
	body("children").isArray().withMessage("Childrens Is Missing"),
	body("children.*").isInt().withMessage("Childrens ID is Invalid"),
];
