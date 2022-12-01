import React, { useEffect } from 'react'
function SecondTest() {
    const d= new Date().toLocaleDateString();
    const t=new Date().toLocaleTimeString();
   
  return (
    <>
        <h1>Hello My name Prince</h1>
        <p>Current date ={d}</p>
        <p>Current time ={t}</p>
    </>
  )
}

export default SecondTest