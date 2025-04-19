import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function UseBook() {
    const [data,setData]=useState([])

useEffect(()=>{
    axios.get("http://localhost:3000/books")
    .then(res=> setData(res.data))
    .catch(error => console.log(error));
  
},[])
    return {data}

    
  
}
