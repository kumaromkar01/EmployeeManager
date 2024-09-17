import EmployeeModel from "../Model/EmployeeSchema.js"


//-------------- for registering an Employee -----------
export const RegisterEmployee = async (req,res)=>{
    const {name, fname, work, nationality, salary} = req.body;

    const register = await EmployeeModel({name, fname, work, nationality,salary});

    try {
        await register.save();
        res.status(200).json(register);
        
    } catch (error) {
        res.status(500).json(error);
    }
}

//----------- Getting all employees record -----------
export const GetAllEmployeeData = async(req,res)=>{

    const record = await EmployeeModel.find();

    try {
        res.status(200).json(record);
    } catch (error) {
        res.status(500).json(error)
    }
}

// ------------ Get single Employee Record ----------
export const GetEmployee = async (req,res)=>{
    const id = req.params.id;
   
   const employee = await EmployeeModel.findById(id);

   try {
       res.status(200).json(employee);
   } catch (error) {
      res.status(500).json(error)
   }
}

// ------- Deleting an employee from Database
export const DeleteEmployee = async (req,res)=>{
    const id = req.params.id;

    const DeleteEmployee = await EmployeeModel.findByIdAndDelete(id);
     try {
         res.status(200).json(DeleteEmployee);
     } catch (error) {
        res.status(500).json(error)
     }
}

// ============ Updating an Employee Record ==========
export const Updating = async (req,res)=>{
    const id = req.params.id;
    // const {name,fname,work,nationality,salary} = req.body;

    try {
        const updated = await EmployeeModel.findByIdAndUpdate(id, req.body,{
            new: true,
        })

        res.status(200).json(updated);
        
    } catch (error) {
          res.status(500).json(error);
    }
}