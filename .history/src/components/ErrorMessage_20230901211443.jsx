import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div className='flex justify-center items-center '>
        <p>{message}</p>
    </div>
  )
}

export default ErrorMessage