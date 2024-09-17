import express from "express";
import { DeleteEmployee, GetAllEmployeeData, GetEmployee, RegisterEmployee, Updating } from "../Controller/EmployeeController.js";
const router = express.Router();


router.post('/register', RegisterEmployee);       // for creating/registering an employee
router.get('/getrecord', GetAllEmployeeData);    // getting all employees record
router.get('/:id', GetEmployee);                // getting a single employee data
router.delete('/delete/:id', DeleteEmployee);  // Deleting an employee
router.put('/update/:id', Updating);          // Updating an employee record


export default router;