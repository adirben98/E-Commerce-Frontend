import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
`;
const Wrapper = styled.div`
  width: 25%;
  background-color: white;
  padding: 10px;
`;
const Title = styled.div`
  font-size: 24px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
flex: 1;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  display: block;
  width: 100px;
  height: 40px;
  background-color: teal;
  color: white;
  font-weight: 400;
  border: none;
  cursor: pointer;
&:hover{
    color:black;
}
`;
const Link = styled.a`
  display: block;
  cursor: pointer;
  &:hover{
    color:blue;
  }
`;

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
        </Form>
        <Button>Login</Button>
        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Wrapper>
    </Container>
  );
}
