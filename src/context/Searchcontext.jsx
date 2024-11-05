import { createContext, useState } from "react";

export let searchcontext = createContext()
function SearchContextProvider(props) {
    const [values, setvalues] = useState("")

    let getmovie=(val)=>{
        // console.log(val);
        setvalues(val)
    }   
    return (
        <>
         <searchcontext.Provider value={{values,getmovie}}>
            {props.children}
        </searchcontext.Provider>
        </>
    )

}
export default SearchContextProvider

