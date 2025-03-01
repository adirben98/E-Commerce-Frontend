import styled from "styled-components";
import { categories } from "../data";
import { Link } from "react-router-dom";
const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;

`;
const Item = styled.div`
margin: 3px;

position: relative;
flex: 1;
`;
const Image = styled.img`
height: 70vh;
width:100%;
object-fit: cover;
`;
const Info = styled.div`
position: absolute;
top:0;
bottom:0;
right:0;
left:0;
margin: auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
`;
const Title = styled.h1`
font-weight: bold;
color: white;
`;
const Button = styled.button`
cursor: pointer;
padding: 10px;
background-color: white;
border: none;
font-weight: 400;
`;
export default function Categories() {
 
  return (
    <Container>
      {categories.map((item, idx) => (
        <Link key={idx} to={`/products/${item.cat}`}>
        <Item key={idx}>
          <Image src={item.img} />
          <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
          </Info>
        </Item>
        </Link>
      ))}
    </Container>
  );
}
