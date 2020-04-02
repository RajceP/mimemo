import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Bar = styled.header`
  height: 56px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: #261132;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
  box-shadow: 0 0.2px 0 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14),
    0 1px 18px 0 rgba(0, 0, 0, 0.12);

  @media (max-width: 1439px) {
    position: absolute;
  }
`;

const Nav = styled.nav`
  height: 100%;
`;

const Logo = styled.div`
  color: #e0ca3c;
  font-weight: bold;
`;

const Toolbar = () => {
  const history = useHistory();

  const LogoClicked = () => {
    history.push('/memo');
  };

  return (
    <Bar>
      <Nav />
      <Logo onClick={() => LogoClicked()}>MiMemo</Logo>
    </Bar>
  );
};

export default Toolbar;
