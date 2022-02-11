import React, { useState } from "react";

import  {GlobalContext} from "./GlobalContext"

const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])

    const states = {pokedex}
    const setters = {setPokedex}

    const contexto = {
      states,
      setters
    }
  
    return (
     <>     
      <GlobalContext.Provider value={contexto}>
        {props.children}
      </GlobalContext.Provider>
     </> 
      
     
    );
}

export default GlobalState