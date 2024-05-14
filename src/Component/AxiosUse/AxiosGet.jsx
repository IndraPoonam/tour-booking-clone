import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AxiosGet() {
    const[userData,setUserData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
           setUserData(response.data)
        })
            },[])
  return (
  
    <div className='bg-blue-200 text-black text-center'>Axios get
{userData.map((data)=>{
    return(
        <div>{data.name}</div>
    )
})}


    </div>
  )
}

export default AxiosGet