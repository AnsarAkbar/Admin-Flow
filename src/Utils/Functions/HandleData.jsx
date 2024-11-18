import { handleUserData } from "../../Redux/Slices/slice";

export const handlesubmite = (e, storeData, pageInputs, path, navigate, setValidation,validation) => {
    e?.preventDefault();

    const inputfields = Object.keys(pageInputs)
    const storedInfo = Object.keys(storeData)
    // check if any field is empity
    inputfields?.filter(item => {
        if (storedInfo.includes(item) && storeData[item]) {
            setValidation((prev) => ({
                ...prev,
                [item]: "",
            }));
        } else {
            setValidation((prev) => ({
                ...prev,
                [item]: 'Field is required...!',
            }));

        }
    });
    console.log(validation)
    console.log(Object.values(validation))

    console.log(Object.values(validation).every(e => e === ""));

    // console.log(Object.values(validation).some(e=>e===true))
    if (!validation) {
        console.log(true)
        navigate && navigate(path && path);
    }

};

export const handleChange = (e, inputFor, dispatch, Reg, validation, setValidation,value) => {
    const inputValue =e.target.value;
        dispatch(handleUserData({ [inputFor]: inputValue }))
    if (Reg?.test(inputValue) || !inputValue || ['gender', 'department', 'checkbox'].includes(inputFor)) {
        // dispatch(handleUserData({ [inputFor]: inputValue }))
        // Clear validation message for this field
        setValidation((prev) => ({
            ...prev,
            [inputFor]: "",
        }));
    } else {
        // Show validation message for this field
        setValidation((prev) => ({
            ...validation, [inputFor]: `Please use ${Reg}`,
        }));
    }
}
// export const checkboxHelper = checkbox => {
// 	const output = checkbox.checked ? true : false
// 	return({value:[output]})
// }
