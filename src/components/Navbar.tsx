import { Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Contanier = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 10px;
  margin-left: 20px;
`;
const SearchContainer = styled.div`
  display: flex;
  border: 0.5px solid lightgray;
  padding: 5px;
`;
const Language = styled.span`
  font-size: 14px;
`;
const Input = styled.input`
  border: none;
  outline: none;
`;
const SearchBtn = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 25px;
  gap: 10px;
`;
const Menuitem = styled.span`
  font-size: 16;
  cursor: pointer;
`;

export default function Navbar() {
  const quantity = useSelector((state: RootState) => state.cart.quantity);
  return (
    <Contanier>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input />
          <SearchBtn>
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchBtn>
        </SearchContainer>
      </Left>
      <Center>
        <Logo>E-Commerce.</Logo>
      </Center>
      <Right>
        <Menuitem>Register</Menuitem>
        <Menuitem>Sign in</Menuitem>
        <Link to="/cart">
        <Menuitem>
          <Badge badgeContent={quantity} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </Menuitem>
        </Link>
      </Right>
    </Contanier>
  );
}
