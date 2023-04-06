import styled from "styled-components";

export const Button = styled.button`
  width: 85%;
  height: 60px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 20px;
  position: absolute;
  bottom: 70px;
  background-color: ${({ theme }) => theme.btnMainColor};
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
