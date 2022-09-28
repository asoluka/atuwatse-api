const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { v4: uuidv4 } = require("uuid");

const presskit = [{ id: uuidv4(), orientation: "Portrait", size: "A4" }];

module.exports = {
  presskit,
};
