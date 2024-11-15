import React from "react";
import "./Forget.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { otpFields } from "../../../Utils/FieldsData/fields";
import { IoCaretBackCircleSharp } from "react-icons/io5";
import { handlesubmite } from "../../../Utils/Functions/HandleData";

const OTP = () => {
  const navigate = useNavigate();  
  return (
    <div className=".page">

      <div>
        <NavLink to={"/forgot-password"}>
          <IoCaretBackCircleSharp className="back" />
        </NavLink>
      </div>

      <form className="otp-form" onSubmit={e=>handlesubmite({ e, path: '/frogot-password/resetpass', navigate})}>
        <h3 className="page-heading">Check your email</h3>
        <p className="page-description">
          We sent a reset link to contact@dscode...com enter 5 digit code that
          mentioned in the email
        </p>
        {otpFields.map((value, index) => {
          return (
            <div className={value.inputFor} key={index}>
              <Input inputFor={value.inputFor} type={value.type} length={1} />
              <Input
                inputFor={value.inputFor}
                type={value.type}
                length={1}
              />
              <Input
                inputFor={value.inputFor}
                type={value.type}
                length={1}
              />
              <Input
                inputFor={value.inputFor}
                type={value.type}
                length={1}
              />
            </div>
          );
        })}
        <Button value="Verify Code" alignment="center" />
      </form>
    </div>
  );
};

export default OTP;
