import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div className='flex justify-center items-center w-full '>
        <p>{message}</p>
    </div>
  )
}

export default ErrorMessage