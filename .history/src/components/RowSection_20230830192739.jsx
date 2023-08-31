import React from 'react'

const RowSection = ({title,fetchURL}) => {
  return (
    <div>
      <h1 className='text-white p-4 fond-bold md:text-xl'>{title}</h1>
      <div className='relative flex items-center'>
        <div id></div>

      </div>
    </div>
  )
}

export default RowSection