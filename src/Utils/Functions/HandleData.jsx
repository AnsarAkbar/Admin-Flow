import { useNavigate } from "react-router-dom"

export const handlesubmite = ({ e, path, navigate}) => {
    e.preventDefault();  
    navigate(path);  
};

export const handleChange=(e,inputFor)=>{
    const inputValue=e.target.value;

    console.log({[inputFor]:inputValue})
}
