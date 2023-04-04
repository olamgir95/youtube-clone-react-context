import React from "react";
import Body from "./component/Body/Body";
import { Container, Wrap } from "./style";
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";

export default function Youtube(){
    return(
        <Container>
           <Sidebar/>
          <Wrap>
          <Navbar/>
           <Body/>
          </Wrap>
        </Container>
    )
}