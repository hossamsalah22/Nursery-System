const express = require("express");
const controller = require("./../Controller/teachersController");
const validation = require("./../Core/validations/validationMiddleWare");
const postValidation = require("./../Core/validations/teachersValidation/postValidation");
const patchValidation = require("./../Core/validations/teachersValidation/patchValidation");
const router = express.Router();

router
	.route("/teachers")
	.get(controller.getAllTeachers)
	.post(postValidation, validation, controller.addTeacher)
	.patch(patchValidation, validation, controller.updateTeacher)
	.delete(controller.deleteTeacher);

module.exports = router;
