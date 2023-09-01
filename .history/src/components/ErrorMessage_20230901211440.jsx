import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div className='flex justify-center items'>
        <p>{message}</p>
    </div>
  )
}

export default ErrorMessage