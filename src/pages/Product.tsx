import { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { useParams } from "react-router-dom";
import { ProductProps } from "../components/Product";
import { publicRequest } from "../service/request";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartRedux";

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
const ColorCircle = styled.div<{ $bg: string }>`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(prop) => prop.$bg};
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

  &:hover {
    background-color: aliceblue;
  }
`;
export interface CartProduct extends Omit<ProductProps, "color" | "size"> {
  color: string;
  size: string;
  amount:number;
}

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [amount, setAmount] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const res = await publicRequest.get(`/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found.</div>;

  const handleAmount = (op: string) => {
    setAmount((prev) => (op === "+" ? prev + 1 : Math.max(prev - 1, 1)));
  };

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(
      addItem({
        product: {
          ...product,
          color,
          size,
          amount
        },
        price: amount * product.price,
      })
    );
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Image src={product.img} />
        <Right>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>
          <FiltersContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <ColorCircle onClick={() => setColor(c)} key={c} $bg={c} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <Select onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <Option key={s}>{s}</Option>
                ))}
              </Select>
            </Filter>
          </FiltersContainer>
          <ButtonsContainer>
            <AmountSection>
              <SignSpan onClick={() => handleAmount("-")}>-</SignSpan>
              <Amount>{amount}</Amount>
              <SignSpan onClick={() => handleAmount("+")}>+</SignSpan>
            </AmountSection>
            <AddButton onClick={handleAddToCart}>Add To Cart</AddButton>
          </ButtonsContainer>
        </Right>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}
