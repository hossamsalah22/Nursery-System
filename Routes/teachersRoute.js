const express = require("express");
const controller = require("./../Controller/teachersController");
const validation = require("./../Core/validations/validationMiddleWare");
const teachervalidation = require("./../Validation/teachersValidation");
const { checkAdmin, checkTeacherAndAdmin } = require("./../Core/auth/authenticationMiddleWare");
const router = express.Router();

router
	.route("/teachers")
	.all(checkAdmin)
	.get(controller.getAllTeachers)
	.post(teachervalidation.postValidation, validation, controller.addTeacher)
	.delete(teachervalidation.deleteValidation, validation, controller.deleteTeacher);

router.patch(checkTeacherAndAdmin, teachervalidation.patchValidation, validation, controller.updateTeacher);
router.get("/teachers/:id", checkAdmin, teachervalidation.getTeacherValidation, validation, controller.getTeacher);

module.exports = router;
