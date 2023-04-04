import { type } from "./mock/type";
import React, { createContext, useState} from "react";
import {movies} from "./mock/movies"
import { data } from "./mock/data";

export const g11Context= createContext()
export default function Context({children}){

    const [ moviesdata, setMoviesdata]=useState(movies)
    const [typedata, setTypedata]=useState(type);
    const [databar, setDatabar]=useState(data)
    return(
        <g11Context.Provider value={{moviesdata, typedata, setTypedata,  setMoviesdata, databar}}>
            {children}
        </g11Context.Provider>
    )
}