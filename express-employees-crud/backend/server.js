const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const dotEnv = require("dotenv");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
dotEnv.config({ quiet: true });
// app.use(bodyParser.json());
app.use(express.json());


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MONGODB Connected Successfully");
  })
  .catch((err) => {
    console.log("DBError", err);
  });

app.use("/employees", employeeRoutes);

app.listen(3000);
