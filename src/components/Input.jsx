import React from 'react'

const Input = ({type,placeholder,length}) => {
  return (
    <div>
      <input type={type}  placeholder={placeholder} maxLength={length} />
    </div>
  )
}

export default Input
