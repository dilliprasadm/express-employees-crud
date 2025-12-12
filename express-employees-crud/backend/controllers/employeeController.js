const Employee = require("../models/Employee");

// CREATE
const createEmployee = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;
    const employee = new Employee({
      name,
      email,
      phone,
      city,
    });
    await employee.save();
    res.status(201).json({ message: "New Employee Created", employee });
  } catch (err) {
    console.log("Error", err);
    res
      .status(500)
      .json({ message: "Server Error. New Employee Not created." });
  }
};

// READ ALL
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({ message: "Server Error" });
  }
};

// READ ONE
const getEmployeeDetails = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not Found" });
    }
    res.json(employee);
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({ message: "Server Error" });
  }
};

// UPDATE
const updateEmployee = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, city },
      { new: true }
    );

    if (!employee) {
      res.status(404).json({ message: "Employee Not Found" });
    }
    res.json({ message: "Employee Updated Successfully", employee });
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({ message: "Server Error" });
  }
};

// DELETE
const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not Found to delete" });
    }
    res.json({ message: "Employee Deleted Successfully" });
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeDetails,
  updateEmployee,
  deleteEmployee,
};
