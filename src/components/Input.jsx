import React, { useState } from "react";

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
  Error_Message
}) => {
  // add a value for input field
  const [isChecked, setIsChecked] = useState(value)
  // console.log("storedData", storedData);

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder && placeholder}
        maxLength={length && length}
        onChange={(e) =>
          handleChange(e, inputFor, dispatch, Reg, validation, setValidation, isChecked, setIsChecked,Error_Message)
        }
        checked={storedData?.[inputFor]}
        value={storedData?.[inputFor]}
      />
    </div>
  );
};

export default Input;
