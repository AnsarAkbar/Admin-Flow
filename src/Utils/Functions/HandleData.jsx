import { useNavigate } from "react-router-dom"
import { handleUserData } from "../../Redux/Slices/slice";

export const handlesubmite = ({ e, path, navigate}) => {
    e.preventDefault();  
    navigate&&navigate(path&&path);  
};

export const handleChange=(e,inputFor,dispatch)=>{
    const inputValue=e.target.value;
    dispatch(handleUserData({[inputFor]:inputValue}))
    // console.log({[inputFor]:inputValue})
}
