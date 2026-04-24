const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/students", require("./routes/studentRoutes")); 
//app.use("/api/fees", require("./routes/feeRoutes"));
//app.use("/api/admission", require("./routes/admissionRoutes"));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));