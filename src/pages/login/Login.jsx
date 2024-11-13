import React from 'react'
import { LoginDetail } from '../../Utils/FieldsData/fields';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, NavLink } from 'react-router-dom';
import './Login.css'

const Login = () => {
  return (
    <>
   
      <form className="login-form">
      <h3 className="page-heading">Login</h3>
        {LoginDetail.map((value, index) => {
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
        <Button value="Login" />
        <div className='acount-option'>
          <div >
            Wrong password
            <NavLink className='navlink' to={'/frogotpassword'} > Frogot Password?</NavLink>
          </div>
          <hr />
          <div>
            Don't have an account?
            <NavLink className='navlink' to={'/signup'}> Singn Up</NavLink>
          </div>    
        </div>
      </form>

    </>
  )
}

export default Login
