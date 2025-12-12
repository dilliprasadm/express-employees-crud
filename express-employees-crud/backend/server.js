const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const dotEnv = require("dotenv");
const employeeRoutes = require("./routes/employeeRoutes");
const ejs = require('ejs');
const path = require('path');

dotEnv.config({ quiet: true });

const app = express();
const PORT = process.env.PORT || 3000;

// parse JSON
// app.use(bodyParser.json());
app.use(express.json());

// EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// static files (CSS, JS) from /public
app.use(express.static(path.join(__dirname, "public")));

// connect DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MONGODB Connected Successfully");
  })
  .catch((err) => {
    console.log("DBError", err);
  });

// API + view routes
app.use("/employees", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
