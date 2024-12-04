import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SingnUpDetail } from "../../../Utils/FieldsData/fields";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import axios from 'axios'
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

  const collectedError = useSelector(
    (e) => e.persistedReducer.collectError.collect
  ); 

  // formData
  // useEffect(async()=>{
  //   await axios.post("http://localhost:4000/add-users", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // },[])


  return (
    <>
      <form
        className="signup-form form"
        onSubmit={(e) =>
          handlesubmite(
            e,
            storedData,
            pageInputs,
            "/admin/dashbord",
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
              <label className="label" htmlFor={value.inputFor}>{value.label}</label>
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
                Error_Message={value.errorMsg}
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
