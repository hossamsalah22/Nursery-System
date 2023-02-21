const mongoose = require("mongoose");
require("./../Model/classModel");

const ClassSchema = mongoose.model("classes");
const TeacherSchema = mongoose.model("teachers");
const ChildSchema = mongoose.model("childrens");

exports.getAllClasses = (request, response) => {
	ClassSchema.find({})
		.populate({ path: "supervisor", select: { fullName: 1 } })
		.populate({ path: "children", select: { fullName: 1 } })
		.then((data) => {
			response.status(200).json({ data });
		});
};

exports.getClass = (request, response) => {
	response.status(200).json({ data: request.params.id });
};

exports.addClass = async (request, response, next) => {
	try {
		let supervisor = await TeacherSchema.findOne({ _id: request.body.supervisor });
		if (supervisor == null) {
			throw new Error("Teacher Not Found");
		}
		let data = await new ClassSchema({
			_id: request.body.id,
			fullName: request.body.fullName,
			supervisor: request.body.supervisor,
			children: request.body.children,
		}).save();
		response.status(201).json({ data });
	} catch (error) {
		next(error);
	}
	response.status(201).json({ data: "Added" });
};

exports.updateClass = (request, response, next) => {
	response.status(200).json({ data: "Updated" });
};

exports.deleteClass = (request, response, next) => {
	response.status(200).json({ data: "Deleted" });
};

exports.getClassChildren = (request, response) => {
	response.status(200).json({ data: request.params.id });
};

exports.getClassTeacher = (request, response) => {
	response.status(200).json({ data: request.params.id });
};
