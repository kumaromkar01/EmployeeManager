import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const View = () => {

const {id} = useParams();
const [record, setrecord] = useState({
  name: "", fname: "", work: "", nationality: "", salary: ""
})

// method definition
const GetRecord = async ()=>{
  const res = await axios.get(`http://localhost:5000/employee/${id}`);
    setrecord({...res.data});
    // console.log({...res.data})

  console.log(record)
}

useEffect(() => {
      GetRecord();
}, [])



  return (
    <>
     <div className="container bg-gray-300 w-full h-[100vh] flex justify-center items-center">
      <div className="bg-stone-300 flex flex-col justify-between py-4 items-start border-2 border-double border-pink-500 w-[20vw] px-7 h-[50vh]">
        <div className="heading ml-10 ">
          <h1 className='text-2xl text-red-600 items-center pb-4 font-bold'>View Record</h1>
        </div>
        <div className="name w-full py-2">
           <h3 className='font-bold text-lg text-blue-600'>Name: <span className='pl-5 text-pink-500'>{record.name}</span></h3>
        </div>
         
        <div className="email py-2">
        <h3 className='font-bold text-lg text-blue-600'>FName: <span className='pl-5 text-pink-500'>{record.fname}</span></h3>
        </div>
       
       <div className="address py-2">
       <h3 className='font-bold text-lg text-blue-600'>Work: <span className='pl-5 text-pink-500'>{record.work}</span></h3>
       </div>

       <div className="contact py-2">
       <h3 className='font-bold text-lg text-blue-600'>Nationality: <span className='pl-5 text-pink-500'>{record.nationality}</span></h3>
       </div>
       <div className="contact py-2">
       <h3 className='font-bold text-lg text-blue-600'>Salary: <span className='pl-5 text-pink-500'>{record.salary}</span></h3>
       </div>
          
       <button className='mt-2 bg-gray-900 px-10 ml-16 py-1 border-2 border-double border-pink-600 hover:bg-gray-700 text-sm text-white rounded-md' >
    <Link to="/">
    Back
    </Link>
    
    </button>
      </div>
     </div>
    </>
  )
}

export default View