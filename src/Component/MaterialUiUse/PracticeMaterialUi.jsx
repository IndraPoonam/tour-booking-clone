import { Button } from '@mui/material'
import React, {useState} from 'react'
const PracticeMaterialUi = () => {
  const[color,setColor]= useState("primary")
  function coustom(){
    setColor("secondary")
    // alert("FUNCTION CALLED BY POONAM")
  }
  return (
    <>
      <div style={{ textAlign: "center", background: 'yellow', text: "black", padding: '3rem' }}>
        <h1>React-MUI</h1>
        <Button
          // color='primary'
          color={color}
          variant="contained"
          // disabled                        //its means button show but it is not working
          onClick={()=>{coustom()}}
        >Click Me</Button></div>
    </>
  )
}

export default PracticeMaterialUi;