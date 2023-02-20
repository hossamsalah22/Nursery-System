const express = require("express");
const controller = require("./../Controller/teachersController");
const router = express.Router();

router.route("/teachers").get(controller.getAllTeachers).post(controller.addTeacher).patch(controller.updateTeacher).delete(controller.deleteTeacher);

module.exports = router;
