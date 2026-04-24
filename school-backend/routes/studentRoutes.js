const express = require("express");
const router = express.Router();

const {
  createStudent,
  getStudents,
  deleteStudent   // 👈 add this
} = require("../controllers/studentController");

router.post("/", createStudent);
router.get("/", getStudents);
router.delete("/:id", deleteStudent); // 👈 DELETE API

module.exports = router;