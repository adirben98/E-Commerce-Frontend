import styled from "styled-components";
const Container = styled.div`
  background-color: teal;
  height: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
`;

export default function Announcement() {
  return <Container>Super Deal! Free Shipping On orders over 50$</Container>;
}
