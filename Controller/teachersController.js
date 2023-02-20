exports.getAllTeachers = (request, response) => {
	response.status(200).json({ data: [] });
};

exports.addTeacher = (request, response, next) => {
	response.status(201).json({ data: "Added" });
};

exports.updateTeacher = (request, response, next) => {
	response.status(200).json({ data: "Updated" });
};

exports.deleteTeacher = (request, response, next) => {
	response.status(200).json({ data: "Deleted" });
};
