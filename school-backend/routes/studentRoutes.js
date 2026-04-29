const express = require("express");
const router = express.Router();

const {
  createStudent,
  getStudents,  
  deleteStudent,
  updateStudent,
  getStudentById
} = require("../controllers/studentController");

router.post("/", createStudent);
router.get("/", getStudents);
router.delete("/:id", deleteStudent); 
router.put("/:id", updateStudent);
router.get("/:id", getStudentById);

  


module.exports = router;