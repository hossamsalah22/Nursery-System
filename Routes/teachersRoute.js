const express = require("express");
const controller = require("./../Controller/teachersController");
const validation = require("./../Core/validations/validationMiddleWare");
const teachervalidation = require("./../Validation/teachersValidation");
const router = express.Router();

router
	.route("/teachers")
	.get(controller.getAllTeachers)
	.post(teachervalidation.postValidation, validation, controller.addTeacher)
	.patch(teachervalidation.patchValidation, validation, controller.updateTeacher)
	.delete(teachervalidation.deleteValidation, validation, controller.deleteTeacher);
router.get("/teachers/:id", teachervalidation.getTeacherValidation, validation, controller.getTeacher);

module.exports = router;
