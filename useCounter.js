import { useState } from "react"


const useCounter = (initialValue = 10)=>{

  const [counter, setcounter] = useState(initialValue)
  
  const incrementar = ()=>{
    setcounter(counter+1);
  }

  const decrementar =()=>{

    if(counter=== 1) return; 
    setcounter(counter - 1);
  }
  
  const reset = ()=>{
    setcounter(initialValue);
  }
  return{
    counter,
      incrementar, 
      decrementar, 
      reset, 
  }
}

export{
  useCounter,
}