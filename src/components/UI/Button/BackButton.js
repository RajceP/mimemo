import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`{
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`;

const StyledButton = styled.button`
  position: fixed;
  width: 75px;
  height: 75px;
  margin-left: -37.5px;
  left: 20%;
  bottom: 25px;
  border-radius: 50%;
  outline: 0;
  border: none;
  background: #e0ca3c;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  animation: ${fadeIn} 500ms ease-in;
`;

const Button = props => {
  return <StyledButton onClick={props.clicked}>{props.children}</StyledButton>;
};

export default Button;
