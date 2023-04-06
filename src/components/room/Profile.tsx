import React from "react";
import styled from "styled-components";

export default function Profile({ number }: { number?: any }) {
  return <Container>1</Container>;
}

const Container = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rebeccapurple;
  display: flex;
  align-items: center;
  justify-content: center;
`;
