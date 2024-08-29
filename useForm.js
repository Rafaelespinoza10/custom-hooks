import { useState } from "react";


export const useForm = (initialForm = {}) => {
    
const [formState, setformState] = useState(initialForm);

const onResetForm = ()=>{
    setformState(initialForm);
}

const onInputChange = ({target})=>{
    const{name, value}= target; 

    setformState({
        ...formState, 
        [ name  ]:value, 

    })
}

  
    return {
        formState, 
        onInputChange, 
        onResetForm, 
    } 
}
