import React, { useState } from 'react'
import axios from 'axios';
export const AxiosPost = () => {
    const data ={fname : " ", lastName : " "};
const[inputData,setInputData] =useState(data)

const handleData=(e)=>{
    setInputData({...inputData,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users", inputData)                                  //post api use 
    .then((response)=>{
        console.log(response)
    })
}

const handleUpdate =(e)=>{
  e.preventDefault();
  axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)                           //put api use
    .then((response)=>{
        console.log(response)
    })
}

const handleDelete=(e)=>{
  e.preventDefault();
  axios.delete("https://jsonplaceholder.typicode.com/users/1")                                  //delete api use here
    .then((response)=>{
        console.log(response)
    })
}

  return (
    <div className='h-full w-full bg-blue-200 text-center p-10'>          

<label>First Name:</label>
<input className='h-9 w-[50%] border border-black rounded bg-white p-3'
 type='text'
  name='fname'
  value={inputData.fname}
  onChange={handleData}
  /> <br/><br/>
<label>Last Name:</label>
<input  className='h-9 w-[50%] border border-black rounded bg-white p-3' 
type='text'
 name='lastName'
 value={inputData.lastName}
onChange={handleData}
 /> <br/><br/>
<div className='flex justify-center gap-3'>
<button className='h-14 w-[10rem] bg-red-500 text-white' onClick={handleSubmit}>Submit</button>
<button className='h-14 w-[10rem] bg-red-500 text-white' onClick={handleUpdate}>Update</button>
<button className='h-14 w-[10rem] bg-red-500 text-white' onClick={handleDelete}>Delete</button></div>
    </div>
  )
}
export default AxiosPost;