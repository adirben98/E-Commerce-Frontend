import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

export default function Products() {
  const Icons = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    z-index: 3;
    background-color: #80808050;
    opacity: 0;
  `;
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
  `;
  const Product = styled.div`
    flex: 1;
    min-width: 300px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    margin: 3px;
    position: relative;
    &:hover ${Icons}{
        opacity: 1;
    }
  `;
  const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    z-index: 2;
  `;
  const Circle = styled.div`
    position: absolute;
    background-color: white;
    height: 150px;
    width: 150px;
    border-radius: 50%;
  `;

  const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
    margin: 5px;

    &:hover {
      transform: scale(1.1);
      background-color: lightgray;
    }
  `;
  return (
    <Container>
      {popularProducts.map((p) => (
        <Product key={p.id}>
          <Image src={p.img} />
          <Circle />
          <Icons>
            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
            <Icon>
              <SearchOutlined />
            </Icon>
            <Icon>
              <ShoppingCartOutlined />
            </Icon>
          </Icons>
        </Product>
      ))}
    </Container>
  );
}
