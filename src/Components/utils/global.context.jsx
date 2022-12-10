import axios from "axios";
import { createContext, useContext, useState, useReducer, useEffect } from "react";
import { themeSwitch } from "./themeSwitch";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dentistas, setDentistas] = useState([])
  const [state, dispach] = useReducer(themeSwitch, initialState)
  const [fav, setFav] = useState([])

  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => setDentistas(res.data))
  },[])
  

  return (
    <ContextGlobal.Provider value={{dentistas, state, dispach, fav, setFav}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = ()=>{
  return useContext(ContextGlobal);
}
