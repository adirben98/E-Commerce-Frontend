import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/store";
import { login, loginFailed, loginSuccess } from "../redux/userRedux";
import { publicRequest } from "../service/request";
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
  &:hover {
    color: black;
  }
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  display: block;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;
const Error = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: red;
`;

export default function Login() {
  const { isFetching, error } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      dispatch(login());
      const res = await publicRequest.post("/auth/login", {
        username,
        password,
      });
      dispatch(loginSuccess(res.data));
    } catch (e) {
      console.log(e);
      dispatch(loginFailed());
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <Button disabled={isFetching} onClick={handleClick}>
          Login
        </Button>
        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
        {error && <Error>Error accured</Error>}
      </Wrapper>
    </Container>
  );
}
