import React from 'react'

const Button = ({value,alignment}) => {
  return (
    <div  className={alignment}>
      <button type='submit' className='btn'>{value}</button>
    </div>
  )
}

export default Button
