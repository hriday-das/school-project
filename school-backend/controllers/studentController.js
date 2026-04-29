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

exports.updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedStudent) return res.status(404).json({ message: "Student not found" });
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: "Error updating student", error });
  } 
};
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);    
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
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