const express = require("express");
const controller = require("./../Controller/childsController");
const validation = require("./../Core/validations/validationMiddleWare");
const childValidation = require("./../Validation/childsValidation");
const router = express.Router();

router
	.route("/childs")
	.get(controller.getAllChilds)
	.post(childValidation.postValidation, validation, controller.addChild)
	.patch(childValidation.patchValidation, validation, controller.updateChild)
	.delete(childValidation.deleteValidation, validation, controller.deleteChild);
router.get("/childs/:id", childValidation.getChildValidation, validation, controller.getChild);

module.exports = router;
