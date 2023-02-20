exports.getAllClasses = (request, response) => {
	response.status(200).json({ data: [] });
};

exports.getClass = (request, response) => {
	response.status(200).json({ data: request.params.id });
};

exports.addClass = (request, response, next) => {
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
