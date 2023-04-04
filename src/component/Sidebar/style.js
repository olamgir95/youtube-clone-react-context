import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  width: 240px;
  height: 100vh;
  position: sticky;
  top: 0;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  background: #212121;
  color: white;
`;
const Wrap = styled.div`
  margin-top: 20px;
  color: white;
  display: flex;
  gap: 20px;
`;
Wrap.Title = styled.div``;
Wrap.Img = styled.img``;
export { Container, Wrap };
