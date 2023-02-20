const express = require("express");
const controller = require("./../Controller/childsController");
const router = express.Router();

router.route("/childs").get(controller.getAllChilds).post(controller.addChild).patch(controller.updateChild).delete(controller.deleteChild);
router.get("/childs/:id", controller.getChild);
module.exports = router;
