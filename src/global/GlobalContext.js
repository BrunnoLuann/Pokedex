import React, { useContext } from "react";

export const GlobalContext = React.createContext();

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}