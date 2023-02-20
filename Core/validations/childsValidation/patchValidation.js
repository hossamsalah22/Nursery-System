const { body } = require("express-validator");

module.exports = [
	body("id").isNumeric().withMessage("Child Id should be Entered"),
	body("fullName").optional().isString().withMessage("Child Name should be string"),
	body("age").optional().isInt().withMessage("Child age is Invalid"),
	body("level").optional().isIn(["PreKG", "KG1", "KG2"]).withMessage("Invalid Level Selection"),
	body("address").optional().isObject().withMessage("Address is Invalid"),
	body("address.city").optional().isString().withMessage("Invalid City"),
	body("address.street").optional().isString().withMessage("Invalid Street"),
	body("address.building").optional().isInt().withMessage("Invalid Building Number"),
];
