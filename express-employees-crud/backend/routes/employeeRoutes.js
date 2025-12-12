const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
// const Employee = require("../models/Employee");

// GET, POST, PUT/PATCH, DELETE routes for Employee

// add employee
// router.post("/add", async (req, res) => {
//   try {
//     const { name, email, phone, city } = req.body;
//     const employee = new Employee({
//       name,
//       email,
//       phone,
//       city,
//     });
//     await employee.save();
//     res.status(201).json({ message: "New Employee Created", employee });
//   } catch (err) {
//     console.log("Error", err);
//     res
//       .status(500)
//       .json({ message: "Server Error. New Employee Not created." });
//   }
// });

// View route – serves the EJS page
router.get("/view", (req, res) => {
  res.render("employees");
});

// API routes
// POST /employees/add
router.post("/add", employeeController.createEmployee);
// GET /employees
router.get("/", employeeController.getAllEmployees);
// GET /employees/:id
router.get("/:id", employeeController.getEmployeeDetails);
// PUT /employees/:id
router.put("/:id", employeeController.updateEmployee);
// DELETE /employees/:id
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
