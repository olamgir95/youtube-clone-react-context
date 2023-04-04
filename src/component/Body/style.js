import styled from "styled-components";

const Container=styled.div`

background: #000000;
/* width: 100%; */
display:  grid;
grid-template-columns: repeat(4,1fr);
gap: 20px;
padding: 24px;


`
const Card =styled.div`
color: white;
max-width: 300px;
min-height: 200px;
background: #000000;

`

Card.Img=styled.img`
width: 100%;
height: 186px;
overflow: hidden;
`

Card.Title=styled.div`
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #FFFFFF;

`
export{Container, Card}