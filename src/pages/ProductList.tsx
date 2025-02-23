import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FiltersContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`

`;
const FilterText=styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`
const Options = styled.select`
  margin: 0px 5px;
  padding: 10px;
`;
const Option = styled.option``;
export default function ProductList() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dress</Title>
      <FiltersContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Options>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Options>
          <Options>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Options>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Options>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Options>
        </Filter>
      </FiltersContainer>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}
