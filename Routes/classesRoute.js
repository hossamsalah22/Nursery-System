const express = require("express");
const controller = require("./../Controller/classesController");
const validation = require("./../Core/validations/validationMiddleWare");
const classValidation = require("./../Validation/classesValidation");
const router = express.Router();

router
	.route("/classes")
	.get(controller.getAllClasses)
	.post(classValidation.postValidation, validation, controller.addClass)
	.patch(classValidation.patchValidation, validation, controller.updateClass)
	.delete(classValidation.deleteClass, validation, controller.deleteClass);
router.get("/classes/:id", classValidation.validateClassId, validation, controller.getClass);
router.get("/classChildren/:id", classValidation.validateClassId, validation, controller.getClassChildren);
router.get("/classTeacher/:id", classValidation.validateClassId, validation, controller.getClassTeacher);

module.exports = router;
