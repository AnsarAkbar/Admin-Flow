import React, { useState } from "react";
// import { checkboxHelper } from '../Utils/Functions/HandleData'

const Input = ({
  type,
  placeholder,
  length,
  handleChange,
  inputFor,
  dispatch,
  Reg,
  validation,
  setValidation,
  storedData,
  value,
}) => {
  // const [check, setCheck] = useState(value)
  // console.log('check',check)
  // console.log("storedData", storedData);

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        maxLength={length}
        onChange={(e) =>
          handleChange(e, inputFor, dispatch, Reg, validation, setValidation, value)
        }
        value={storedData?.[inputFor]}
        // checked={value}
        // onClick={() => {
        //   if (inputFor === "checkbox") {
        //     setCheck(!check)
        //   }
        // }}
      />
    </div>
  );
};

export default Input;
