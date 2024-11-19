import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SingnUpDetail } from "../../../Utils/FieldsData/fields";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import {
  handleChange,
  handlesubmite,
} from "../../../Utils/Functions/HandleData";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const [validation, setValidation] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pageInputs = { name: "", email: "", password: "", checkbox: "" };


  const storedData = useSelector(
    (e) => e.persistedReducer.collectUserInfo
  );

  console.log('storedData',storedData)
  const collectedError = useSelector(
    (e) => e.persistedReducer.collectError.collect
  ); 

  return (
    <>
      <form
        className="signup-form"
        onSubmit={(e) =>
          handlesubmite(
            e,
            storedData,
            pageInputs,
            "/admin",
            navigate,
            validation,
            collectedError,
            dispatch
          )
        }
      >
        <h3 className="page-heading">SignUp</h3>
        {SingnUpDetail.map((value, index) => {
          return (
            <div className={value.inputFor} key={index}>
              <label htmlFor={value.inputFor}>{value.label}</label>
              <Input
                inputFor={value.inputFor}
                type={value.type}
                placeholder={value.placeholder}
                handleChange={handleChange}
                dispatch={dispatch}
                Reg={value.reg}
                validation={validation}
                setValidation={setValidation}
                storedData={storedData.collect}
                value={value.value}
              />
              {collectedError?.[value.inputFor] && (
                <small style={{ color: "red" }}>
                  {collectedError?.[value.inputFor]}
                </small>
              )}
            </div>
          );
        })}
        <Button value="Signup" />

        <div className="acount-option">
          <hr />
          If you have a account?
          <NavLink className="navlink" to={"/"}>
            {" "}
            Login
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default SignUp;
