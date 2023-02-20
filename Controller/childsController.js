exports.getAllChilds = (request, response) => {
	response.status(200).json({ data: [] });
};

exports.getChild = (request, response) => {
	response.status(200).json({ data: request.params.id });
};

exports.addChild = (request, response, next) => {
	response.status(201).json({ data: "Added" });
};

exports.updateChild = (request, response, next) => {
	response.status(200).json({ data: "Updated" });
};

exports.deleteChild = (request, response, next) => {
	response.status(200).json({ data: "Deleted" });
};
