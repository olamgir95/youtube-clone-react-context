import React, { useContext, } from "react";
import { Container, Wrap} from "./style";

import { g11Context } from "../../constants/Context";


export default function Sidebar() {
const {databar}= useContext(g11Context)
    return(
        <Container>
      
        
            {
                databar.map((value)=>{
                    return(
                    <Wrap key={value.id}>
                       <Wrap.Title>{value.name}</Wrap.Title>
                       <Wrap.Img scr={value?.icon}/>
                    
                    </Wrap>
                        
                    )
                })
            }

       
        </Container>

    )
    
}