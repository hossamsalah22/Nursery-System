const express = require("express");
const controller = require("./../Controller/classesController");
const router = express.Router();

router.route("/classes").get(controller.getAllClasses).post(controller.addClass).patch(controller.updateClass).delete(controller.deleteClass);
router.get("/classes/:id", controller.getClass);
router.get("/classChildren/:id", controller.getClassChildren);
router.get("/classTeacher/:id", controller.getClassTeacher);

module.exports = router;
