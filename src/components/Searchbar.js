import React, { useState } from 'react'

function Searchbar({searchSubmit}) {
   const[searchTerm,setSearchTerm]= useState("");
   const handleSubmit =(e)=>{
     e.preventDefault()
     searchSubmit(searchTerm)
   }
   const handleChange = (e)=>{
    setSearchTerm(e.target.value)
   }
  return (
   <form onSubmit ={handleSubmit}>
      <label>
        <input type="text" value ={searchTerm} onChange={handleChange} />
      </label>
      
   </form>
  )
}

export default Searchbar