import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Bar = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #3E2F5B;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

const Nav = styled.nav`
  height: 100%;
`;

const Logo = styled.div`
  color: #E0CA3C;
  font-weight: bold;
`;

const Toolbar = () => {
  let history = useHistory();

  const LogoClicked = () => {
    history.push('/memo');
  };

  return (
    <Bar>
      <Nav></Nav>
      <Logo onClick={() => LogoClicked()}>MiMemo</Logo>
    </Bar>
  );
};

export default Toolbar;
