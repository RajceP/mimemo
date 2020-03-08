import React from 'react';
import styled from 'styled-components';

import Bar from '../components/Navigation/Toolbar/Toolbar';

const Main = styled.main`
  margin-top: 66px;
`

const Layout = props => {
  return (
    <div>
      <Bar />
      <Main>{props.children}</Main>
    </div>
  );
};

export default Layout;
