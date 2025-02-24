import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 40px;
  height: 100vh;
  max-width: 100vw;
  display: flex;
`;
const Image = styled.img`
  flex: 1;
  object-fit: cover;
`;
const Right = styled.div`
  flex: 2;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-weight: 200;
  font-size: 1rem;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  max-width: 40vw;
`;
const Price = styled.div`
  font-size: 2rem;
`;
const FiltersContainer = styled.div`
  display: flex;
  max-width: 20vw;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const Select = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const Option = styled.option``;
const ColorCircle = styled.div<{ bg: string }>`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(prop) => prop.bg};
  cursor: pointer;
`;
const ButtonsContainer = styled.div`
  display: flex;
`;
const AmountSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  font-size: 1.5rem;
`;
const SignSpan = styled.span`
  font-weight: bold;
  cursor: pointer;
`;
const Amount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid teal;
  height: 20px;
  width: 20px;
  border-radius: 25%;
  margin: 0 15px;
  padding: 10px;
`;
const AddButton = styled.button`
  padding: 10px;
  background-color: transparent;
  border: 1px solid teal;
  cursor: pointer;

  &:hover{
    background-color: aliceblue;
  }
`;
export default function Product() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        <Right>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FiltersContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <ColorCircle bg={"black"} />
              <ColorCircle bg={"darkblue"} />
              <ColorCircle bg={"gray"} />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <Select>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </Filter>
          </FiltersContainer>
          <ButtonsContainer>
            <AmountSection>
              <SignSpan>-</SignSpan>
              <Amount>1</Amount>
              <SignSpan>+</SignSpan>
            </AmountSection>
            <AddButton>Add To Cart</AddButton>
          </ButtonsContainer>
        </Right>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}
