const express = require("express");
const controller = require("./../Controller/classesController");
const validation = require("./../Core/validations/validationMiddleWare");
const postValidation = require("./../Core/validations/classesValidation/postValidation");
const patchValidation = require("./../Core/validations/classesValidation/patchValidation");
const router = express.Router();

router
	.route("/classes")
	.get(controller.getAllClasses)
	.post(postValidation, validation, controller.addClass)
	.patch(patchValidation, validation, controller.updateClass)
	.delete(controller.deleteClass);
router.get("/classes/:id", controller.getClass);
router.get("/classChildren/:id", controller.getClassChildren);
router.get("/classTeacher/:id", controller.getClassTeacher);

module.exports = router;
