import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RowSection = ({title,fetchURL}) => {
  const[films,setFilms]= useState([])
  useEffect(()=>{
    axios.get(fetchURL).then((response)=>{
      setFilms(response.data.results)
    })
  },[fetchURL])
console.log(films)
  return (
    <div>
      <h1 className='text-white p-4 fond-bold md:text-xl'>{title}</h1>
      <div className='relative flex items-center'>
        <div id={'slider'}>
          {films.map((items,id)=>{
           <div key={id}>
            <div className='relative p-4'></div>
           </div>
          })}
        </div>

      </div>
    </div>
  )
}

export default RowSection