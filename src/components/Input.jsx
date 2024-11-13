import React from 'react'

const Input = ({type,placeholder,maxlength}) => {
  return (
    <div>
      <input type={type}  placeholder={placeholder} maxlength={maxlength} />
    </div>
  )
}

export default Input
