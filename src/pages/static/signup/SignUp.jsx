import React,{useEffect, useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SingnUpDetail } from "../../../Utils/FieldsData/fields";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { handleChange, handlesubmite } from "../../../Utils/Functions/HandleData";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const [validation, setValidation] = useState({});
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const pageInputs={name:"",email:"",password:"",checkbox:""}
  // console.log(pageInputs)

  const storedData=useSelector(e=>e.persistedReducer.collectUserInfo.collect)


  // useEffect(e=>handlesubmite,[])

  return (
    <>
      <form className="signup-form" onSubmit={e=>handlesubmite(e,storedData,pageInputs,'/admin',navigate,setValidation,validation)}>
        <h3 className="page-heading">SignUp</h3>
        {SingnUpDetail.map((value, index) => {
          // pageInputs.push({[value.inputFor]:""})
          // setPageInputs(prev=>([...prev,{[value.inputFor]:""}]))
          return (
            <div className={value.inputFor} key={index}>
              <label htmlFor={value.inputFor}>{value.inputFor}</label>
              <Input
                inputFor={value.inputFor}
                type={value.type}
                placeholder={value.placeholder}
                handleChange={handleChange}
                dispatch={dispatch}
                Reg={value.reg}
                validation={validation}
                setValidation={setValidation}
                storedData={storedData}
                value={value.value}
              />
             {validation[value.inputFor] && (
                <small style={{ color: "red" }}>
                  {validation[value.inputFor]}
                </small>
              )}
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
