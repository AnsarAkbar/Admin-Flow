import React from "react";
import { NavLink } from "react-router-dom";
import { SingnUpDetail } from "../../../Utils/FieldsData/fields";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { handleChange } from "../../../Utils/Functions/HandleData";

const SignUp = ({ }) => {
  // const formfields=[]
  // console.log('formfields',formfields)
  return (
    <>
      <form className="signup-form">
        <h3 className="page-heading">SignUp</h3>
        {SingnUpDetail.map((value, index) => {
          // formfields.push({[value.inputFor]:""})
          return (
            <div className={value.inputFor} key={index}>
              <label htmlFor={value.inputFor}>{value.inputFor}</label>
              <Input
                inputFor={value.inputFor}
                type={value.type}
                placeholder={value.placeholder}
                handleChange={handleChange}
              />
            </div>
          );
        })}
        <Button value="Signup" />
        
        <div className='acount-option'>
          <hr />
          If you have a account?
          <NavLink className='navlink' to={'/'}> Login</NavLink>
        </div>
      </form>

    </>
  );
};

export default SignUp;
