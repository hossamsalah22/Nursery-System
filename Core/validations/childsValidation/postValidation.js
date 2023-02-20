const { body } = require("express-validator");

module.exports = [
	body("id").isNumeric().withMessage("Child Id should be Object"),
	body("fullName").isString().withMessage("Child Name should be string"),
	body("age").isInt().withMessage("Child age is Invalid"),
	body("level").isIn(["PreKG", "KG1", "KG2"]).withMessage("Invalid Selection"),
	body("address").isObject().withMessage("Address is Invalid"),
	body("address.city").isString().withMessage("Invalid City"),
	body("address.street").isString().withMessage("Invalid Street"),
	body("address.building").isInt().withMessage("Invalid Building Number"),
];
