import React from 'react'

const Input = ({type,placeholder,length, handleChange,inputFor,dispatch}) => {
  // console.log('handlechange',handleChange)
  return (
    <div>
      <input type={type}  placeholder={placeholder} maxLength={length} onChange={e=>handleChange(e,inputFor,dispatch)}/>
    </div>
  )
}

export default Input
