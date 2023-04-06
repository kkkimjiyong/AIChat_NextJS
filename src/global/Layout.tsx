import React from "react";
import styled from "styled-components";
export const Layout = ({ children }: { children: any }) => {
  return (
    <Background>
      <Container>{children}</Container>
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.fontColor};
`;
