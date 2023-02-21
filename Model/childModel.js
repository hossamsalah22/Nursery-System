const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
	city: { type: String, required: true },
	street: { type: String, required: true },
	building: { type: Number, required: true },
	_id: false,
});

const schema = new mongoose.Schema({
	_id: Number,
	fullName: { type: String, required: true },
	age: { type: Number, required: true },
	level: { type: String, required: true },
	address: { type: addressSchema, required: true },
});

mongoose.model("childrens", schema);
