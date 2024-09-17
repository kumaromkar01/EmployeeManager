import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const Delete = () => {

  const {id} = useParams();
  const navigate = useNavigate();

//DeleteRecord method definition
const DeleteRecord = ()=>{
  
  if(window.confirm("Are you sure to delete this record?")){
    axios.delete(`http://localhost:5000/employee/delete/${id}`);
    toast.success("Record Deleted Successfully")
   
      navigate('/');
   
  }
}

  useEffect(() => {
    console.log("im fired!")
    DeleteRecord();
  }, [])
  
  return (
    <>
    
    </>
  )
}

export default Delete