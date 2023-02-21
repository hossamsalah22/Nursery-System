const mongoose = require("mongoose");

const schema = mongoose.Schema({
	_id: Number,
	fullName: { type: String, required: true },
	supervisor: { type: mongoose.ObjectId },
	children: { type: [Number] },
});

mongoose.model("classes", schema);
