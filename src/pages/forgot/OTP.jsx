import React from 'react'
import './Forget.css'
import { Link, NavLink } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { otpFields } from '../../Utils/FieldsData/fields';


const OTP = () => {
  return (
    <>
    <form className="otp-form">
    <h3 className="page-heading">Check your email</h3>
    <p className="page-description">We sent a reset link to contact@dscode...com
    enter 5 digit code that mentioned in the email</p>
      {otpFields.map((value, index) => {
        return (
          <div className={value.inputFor} key={index}>
            {/* <label htmlFor={value.inputFor}>{value.inputFor}</label> */}
            <Input
              inputFor={value.inputFor}
              type={value.type}
              maxlength={1}
            />
            <Input
              inputFor={value.inputFor}
              type={value.type}
              maxlength={1}
            />
            <Input
              inputFor={value.inputFor}
              type={value.type}
              maxlength={1}
            />
            <Input
              inputFor={value.inputFor}
              type={value.type}
              maxlength={1}
            />
          </div>
        );
      })}
      <Button value="Verify Code"/>
    </form>
    <NavLink to={'/'}>Back</NavLink>
    </>
  )
}

export default OTP