import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div className='flex '>
        <p>{message}</p>
    </div>
  )
}

export default ErrorMessage