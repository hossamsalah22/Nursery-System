const express = require("express");
const controller = require("./../Controller/childsController");
const validation = require("./../Core/validations/validationMiddleWare");
const postValidation = require("./../Core/validations/childsValidation/postValidation");
const patchValidation = require("./../Core/validations/childsValidation/patchValidation");
const router = express.Router();

router
	.route("/childs")
	.get(controller.getAllChilds)
	.post(postValidation, validation, controller.addChild)
	.patch(patchValidation, validation, controller.updateChild)
	.delete(controller.deleteChild);
router.get("/childs/:id", controller.getChild);
module.exports = router;
