import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { EmailForgot } from "../../../Utils/FieldsData/fields";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { IoCaretBackCircleSharp } from "react-icons/io5";
import "./Forget.css";
import { handlesubmite } from "../../../Utils/Functions/HandleData";

const Email = () => {
  const navigate = useNavigate();  

  return (
    <div className=".page">
      <div>
        <NavLink to={"/"}>
          <IoCaretBackCircleSharp className="back" />
        </NavLink>
      </div>
      <form className="forget-email-form form"  onSubmit={e=>handlesubmite({ e, path: '/forgot-password/otp', navigate})}>
        <h3 className="page-heading">Forgot password</h3>
        <p className="page-description">
          Please enter your email to reset the password
        </p>
        {EmailForgot.map((value, index) => {
          return (
            <div className={value.inputFor} key={index}>
              <label className="label" htmlFor={value.inputFor}>{value.inputFor}</label>
              <Input
                inputFor={value.inputFor}
                type={value.type}
                placeholder={value.placeholder}
              />
            </div>
          );
        })}
        <Button value="Reset Password" alignment="center" />
      </form>
    </div>
  );
};

export default Email;
