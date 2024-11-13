import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { EmailForgot } from '../../Utils/FieldsData/fields';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Email = () => {
  return (
    <>
    <form className="forget-email-form">
    <h3 className="page-heading">Forgot password</h3>
    <p className="page-description">Please enter your email to reset the password</p>
      {EmailForgot.map((value, index) => {
        return (
          <div className={value.inputFor} key={index}>
            <label htmlFor={value.inputFor}>{value.inputFor}</label>
            <Input
              inputFor={value.inputFor}
              type={value.type}
              placeholder={value.placeholder}
            />
          </div>
        );
      })}
      <Button value="Reset Password"/>
    </form>
    <NavLink to={'/'}>Back</NavLink>
    </>
  )
}

export default Email
