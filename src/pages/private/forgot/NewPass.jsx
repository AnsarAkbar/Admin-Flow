import React from "react";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { newPass } from "../../../Utils/FieldsData/fields";
import { IoCaretBackCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const NewPass = () => {
  return (
    <div className=".page">
      <div>
        <NavLink to={"/frogot-password/resetpass"}>
          <IoCaretBackCircleSharp className="back" />
        </NavLink>
      </div>
      <form className="newPass-form">
        <div>
          <h3 className="page-heading">Set a new password</h3>
          <p className="page-description">
            Create a new password. Ensure it differs from previous ones for
            security
          </p>
        </div>
        {newPass.map((value, index) => {
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
        <Button value="Update Password"  alignment="center"/>
      </form>
    </div>
  );
};

export default NewPass;
