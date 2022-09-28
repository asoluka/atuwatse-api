const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const speechesSchema = new Schema({
  id: ObjectId,
  title: String,
  body: String,
});

const Speeches = mongoose.model("speeches", speechesSchema);

module.exports = {
  Speeches,
};
