import React from 'react'

const Button = ({value,calssName}) => {
  return (
    <div  className={calssName}>
      <button type='submit'>{value}</button>
    </div>
  )
}

export default Button
