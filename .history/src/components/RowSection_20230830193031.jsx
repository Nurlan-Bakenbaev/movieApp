import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RowSection = ({title,fetchURL}) => {
  const[films,setFilms]= useState([])
  useEffect(()=>{
    axios.get(fetchURL).then((responce))
  },[fetchURL])
  return (
    <div>
      <h1 className='text-white p-4 fond-bold md:text-xl'>{title}</h1>
      <div className='relative flex items-center'>
        <div id={'slider'}></div>

      </div>
    </div>
  )
}

export default RowSection