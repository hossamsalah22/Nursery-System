const mongoose = require("mongoose");
require("./../Model/teacherModel");

const bcrypt = require("bcryptjs");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const TeacherSchema = mongoose.model("teachers");

exports.getAllTeachers = (request, response, next) => {
	TeacherSchema.find({})
		.then((data) => {
			response.status(200).json({ data });
		})
		.catch((error) => {
			next(error);
		});
};

exports.addTeacher = (request, response, next) => {
	new TeacherSchema({
		_id: request.body.id,
		fullName: request.body.fullName,
		password: bcrypt.hashSync(request.body.password, salt),
		email: request.body.email,
		image: request.body.image,
	})
		.save() //insertOne
		.then((data) => {
			response.status(201).json({ data });
		})
		.catch((error) => next(error));
};

exports.updateTeacher = (request, response, next) => {
	let hashedPass = request.body.password ? bcrypt.hashSync(request.body.password, salt) : request.body.password;
	TeacherSchema.updateOne(
		{
			_id: request.body.id,
		},
		{
			$set: {
				fullName: request.body.fullName,
				password: hashedPass,
				email: request.body.email,
				image: request.body.image,
			},
		}
	)
		.then((data) => {
			if (data.matchedCount == 0) {
				next(new Error("Teacher Not Found"));
			} else {
				response.status(200).json({ data: "Updated" });
			}
		})
		.catch((error) => {
			next(error);
		});
};

exports.deleteTeacher = (request, response, next) => {
	TeacherSchema.findByIdAndDelete(request.body.id)
		.then((data) => {
			response.status(200).json({ data: "Deleted" });
		})
		.catch((error) => {
			next(error);
		});
};

exports.getTeacher = (request, response) => {
	TeacherSchema.findById(request.params.id)
		.then((data) => {
			response.status(200).json({ data });
		})
		.catch((error) => {
			next(error);
		});
};
