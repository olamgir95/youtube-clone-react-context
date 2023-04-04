import React, { useContext } from "react";
import  ReactDOM  from "react";
import { Container, Wrap } from "./style";
import { g11Context } from "../../constants/Context";

export default function Sidebar() {
  const { databar } = useContext(g11Context);

  return (
    <Container>
      {databar.map(({id,name,Icon}) => 
        (
          <Wrap key={id}>
          <Icon/>
            <Wrap.Title>{name}</Wrap.Title>
          </Wrap>
        )
      )}
    </Container>
  );
}
