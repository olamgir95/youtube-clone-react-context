import styled from "styled-components";
import { ReactComponent as Vector } from "../icon/Vector.svg";




const Container=styled.div`
width: 100%;

`
 const Wrap=styled.div`
width: 100%;
height: 56px;
background-color: #212121;
border: 1px solid rgba(255, 255, 255, 0.2);
display: flex;
align-items: center;
justify-content: center;

`
const Wrap2=styled.div`
width: 100%;
height: 56px;
background-color: #212121;
border: 1px solid rgba(255, 255, 255, 0.2);
display: flex;
align-items: center;
justify-content: center;
gap: 50px;


`
const InputWrap=styled.div`
display: flex;
align-items: center;
justify-content: center;


`

InputWrap.Input=styled.input`
background: #000000;
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 2px 0px 0px 2px;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: rgba(255, 255, 255, 0.2);
outline: none;
height: 32px;
width: 572px;
padding-left: 10px;
`
InputWrap.Icon=styled(Vector)`

background: rgba(255, 255, 255, 0.2);
border-radius: 0px 2px 2px 0px;
padding: 8px 20px;
`
const Button =styled.button`
background: rgba(255, 255, 255, 0.2);

border: 1px solid rgba(255, 255, 255, 0.4);
border-radius: 30px;

`
export{Container, Wrap, Wrap2, InputWrap, Button}