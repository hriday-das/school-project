const Student = require("../models/studentModel");

// Create student
exports.createStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.json(student);
};

// Get all students
exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

// DELETE student
exports.deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;

    await Student.findByIdAndDelete(id);

    res.status(200).json({
      message: "Student deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Error deleting student",
      error
    });
  }
};