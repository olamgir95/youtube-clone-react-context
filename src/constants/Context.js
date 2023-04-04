import { type } from "./Type";
import React, { createContext, useState} from "react";
// import {movies} from "./Movies"
import { data } from "./Data";
import { movies } from "./Movies/constants";

export const g11Context= createContext()
export default function Context({children}){

    const [ moviesdata, setMoviesdata]=useState(movies)
    const [typedata, setTypedata]=useState(type);
    const [databar, setDatabar]=useState(data)
    return(
        <g11Context.Provider value={{moviesdata, typedata, setTypedata,  setMoviesdata, databar, setDatabar}}>
            {children}
        </g11Context.Provider>
    )
}