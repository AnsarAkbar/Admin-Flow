import { errorHandle, handleUserData } from "../../Redux/Slices/slice";

export const handlesubmite = (e, storeData, pageInputs, path, navigate, validation, collectedError,dispatch) => {
    e?.preventDefault();

    const inputfields = Object.keys(pageInputs)
    const storedInfo = Object.keys(storeData.collect)//get keys of stored items

    // console.log('storedInfo',storedInfo)

    // check if any field is empity
    inputfields?.filter(item => {
        if (storedInfo.includes(item) && storeData.collect[item]) {
            // validation = { ...validation, [item]: "", }
        } else {
            validation = { ...validation, [item]: 'Field is required...!', }
        }
    });

    dispatch(errorHandle(validation))
    // check any error exist?
    const anyError = Object.values(collectedError).some(value => value !== "");
    // console.log(storedInfo?.length)
    if (!anyError && storedInfo?.length) {
        dispatch(handleUserData(true))
        navigate && navigate(path && path);
    }else{
        dispatch(handleUserData(false))
    }
};

export const handleChange = (e, inputFor, dispatch, Reg, validation, setValidation, isChecked, setIsChecked, Error_Message) => {
    // onClicked check box convert in 'true'
    isChecked=!isChecked
    setIsChecked(isChecked);
    // if inputFor === checkbox 
    const inputValue=inputFor==="checkbox"?isChecked: e.target.value;
    // dispatchad data
    dispatch(handleUserData({ [inputFor]: inputValue }))

    if (Reg?.test(inputValue) || !inputValue || ['gender', 'department', 'checkbox'].includes(inputFor)) {
        // if regex is true then remove the error
        validation = { ...validation, [inputFor]: "" }
    } else {
        // if regex is false then add error
        validation = { ...validation, [inputFor]: `${Error_Message}` }//Error_Message dispaly
    }
    // dispatch errors
    dispatch(errorHandle(validation))
}

