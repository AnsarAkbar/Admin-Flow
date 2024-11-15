import React from 'react'

const Button = ({value,alignment}) => {
  return (
    <div  className={alignment}>
      <button type='submit'>{value}</button>
    </div>
  )
}

export default Button
