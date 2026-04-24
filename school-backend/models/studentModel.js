const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  class: String,
  age: Number,
  phone: String

}, { timestamps: true }); 	

module.exports = mongoose.model("Student", studentSchema);