const mongoose = require("mongoose");
require("./../Model/childModel");

const ChildSchema = mongoose.model("childrens");

exports.getAllChilds = (request, response, next) => {
	ChildSchema.find({})
		.then((data) => {
			response.status(200).json({ data });
		})
		.catch((error) => {
			next(error);
		});
};

exports.getChild = (request, response) => {
	ChildSchema.findById(request.params.id)
		.then((data) => {
			response.status(200).json({ data });
		})
		.catch((error) => {
			next(error);
		});
};

exports.addChild = (request, response, next) => {
	new ChildSchema({
		_id: request.body.id,
		fullName: request.body.fullName,
		age: request.body.age,
		level: request.body.level,
		address: request.body.address,
	})
		.save()
		.then((data) => {
			response.status(201).json({ data });
		})
		.catch((error) => {
			next(error);
		});
};

exports.updateChild = (request, response, next) => {
	ChildSchema.updateOne(
		{
			_id: request.body.id,
		},
		{
			$set: {
				fullName: request.body.fullName,
				age: request.body.age,
				level: request.body.level,
				address: request.body.address,
			},
		}
	)
		.then((data) => {
			if (data.matchedCount == 0) {
				next(new Error("Child Not Found"));
			} else {
				response.status(200).json({ data: "Updated" });
			}
		})
		.catch((error) => {
			next(error);
		});
};

exports.deleteChild = (request, response, next) => {
	ChildSchema.findByIdAndDelete(request.body.id)
		.then((data) => {
			response.status(200).json({ data: "Deleted" });
		})
		.catch((error) => {
			next(error);
		});
	response.status(200).json({ data: "Deleted" });
};
