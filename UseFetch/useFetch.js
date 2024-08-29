import { useEffect, useState } from "react"

const localCache ={};

export const useFetch = (url) => {


    const [state, setstate] = useState({
        data:null, 
        isLoading:true, 
        hasError:false, 
        errorMessage: null, 
    });

    useEffect(() => {
        getFetch();

    }, [url]);   // una vez que se monta ya no se vuelve a disparar
    
    const setLoadingState = ()=>{
        setstate({
            data:null, 
            isLoading: true, 
            hasError: false, 
            error: null, 
        });
    }

    const getFetch = async()=>{

        if(localCache[url]){ 
            console.log('usando cache...');
            setstate({
                data:localCache[url],
                isLoading: false, 
                hasError: false, 
                error: null,
            });
            return;
        }

       setLoadingState();
       const response = await  fetch(url);

        await new Promise(resolve=> setTimeout(resolve, 1500));
        
        if(!response.ok){
            setstate({
                data:null, 
                isLoading: false, 
                hasError: true, 
                errorMessage:{
                    code: response.status, 
                    message: response.statusText,
                }
            });
            return;
        }

        const data = await response.json();



        setstate({
            data, 
            isLoading: false,
            hasError: false, 
            errorMessage: null, 
        })
        
        //Manejo del cache 
        localCache[url] = data; 


    }



    return {
        data:state.data, 
        isLoading: state.isLoading, 
        hasError: state.hasError, 
    }
}
