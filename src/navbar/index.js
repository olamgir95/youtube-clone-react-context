import React, { useContext } from "react";
import { g11Context } from "../context";
import { movies } from "../mock/movies";
import { Container, Wrap,Wrap2, InputWrap, Button } from "./style";

export default function  Navbar() {
const { setMoviesdata,typedata, setTypedata}=useContext(g11Context)
    const onChange=(e)=>{
        const  res= movies.filter((value)=>
        value.name.toLowerCase().includes(e.target.value.toLowerCase())
        );setMoviesdata(res)
        
    }
    
const onClick=(name)=>{
    
    const ress=movies.filter((value)=>
        
        
        name==="All"? value.type!==name: value.type===name
       
       
        )
        setMoviesdata(ress)
        
}
    return(
<Container>
<Wrap>
    <InputWrap>
    <InputWrap.Input onChange={onChange} type="text" placeholder="name"/>
    <InputWrap.Icon/>
    </InputWrap>
</Wrap>
<Wrap2>
   { typedata.map((item)=>{
   return <Button key={item.id} onClick={()=>onClick(item.name)} >{item.name}</Button>
   })}
</Wrap2>


</Container>

    )
    
}
