import React from 'react'
import Button from '../../components/Button'

const PassReset = () => {
  return (
    <div>
      <h3 className="page-heading">Password reset</h3>
      <p className="page-description">Your password has been successfully reset. click
      confirm to set a new password</p>
      <Button value={'Confirm'} />
    </div>
  )
}

export default PassReset
