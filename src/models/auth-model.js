const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
	id: ObjectId,
	email: String,
	firstName: String,
	lastName: String,
	password: String,
});

const User = mongoose.model("user", userSchema);

module.exports = {
	User,
};
