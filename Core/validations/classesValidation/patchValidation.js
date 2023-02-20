const { body } = require("express-validator");

module.exports = [
	body("id").isNumeric().withMessage("Class Id should be Entered"),
	body("fullName").optional().isString().withMessage("Class Name should be string"),
	body("supervisor").optional().isInt().withMessage("Teacher Id Is Invalid"),
	body("children").optional().isArray().withMessage("Childrens Is Missing"),
	body("children.*").optional().isInt().withMessage("Childrens ID is Invalid"),
];
