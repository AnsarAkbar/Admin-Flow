import React from 'react'
import Button from '../../../components/Button'
import './Forget.css'
import { handlesubmite } from '../../../Utils/Functions/HandleData'
import { useNavigate } from 'react-router-dom'

const PassReset = () => {
  const navigate=useNavigate()
  return (
    <div className=''>
      <form className='form' action="" onSubmit={e=>handlesubmite({ e, path: '/frogot-password/new', navigate})}>
      <h3 className="page-heading">Password reset</h3>
      <p className="page-description">Your password has been successfully reset. click
      confirm to set a new password</p>

      <Button value={'Confirm'}  alignment="center"/>
      </form>
    </div>
  )
}

export default PassReset
