import React from "react";
import styled from "styled-components";

export const Input = styled.input`
  width: 85%;
  padding: 0 10px;
  height: 40px;
  border-radius: 2px;
  border: 1px solid #393939;
  color: white;
  ::placeholder {
    color: #393939;
  }
  :focus {
    border: 1px solid white;
  }
`;
