import { type } from "./type";
import React, { createContext, useState} from "react";
import { data } from "./data";
import {movies} from "./movies";

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