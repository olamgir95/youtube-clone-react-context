import React, { useContext } from "react";

import { Container, Card } from "./style";
import { g11Context } from "../../constants/Context";


export default function Body() {
const {moviesdata, setMoviesdata}=useContext(g11Context)
    return(
        <Container>
           {
           moviesdata.map((value)=>{
                return(
                    <Card key={value.id}>
                        <Card.Img src={value.url}/>
                       <Card.Title>{value.name}</Card.Title> 
                    </Card>
                )
            })
           }
        </Container>

    )
    
}