import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
    height: 450px;
    background-color: #e9d1d1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Title = styled.h1`
    font-weight: bold;
    font-size: 80px;
  `;
  const Content = styled.p`
    margin: 20px;
    font-size: 25px;
    font-weight: 200;
  `;
  const InputContainer = styled.div`
    display: flex;
    width: 50%;
  `;
  const Input = styled.input`
    padding: 10px 2px;
    border: 1px solid transparent;
    flex: 8;
  `;
  const Button = styled.button`
    flex: 1;
    background-color: teal;
    border: 1px solid transparent;`

export default function Newsletter() {
  
  
  return (
    <Container>
      <Title>Newsletter</Title>
      <Content>Get timely updates from your favorite products.</Content>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}
