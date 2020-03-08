import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Memo from '../../components/Memo/Memo';
import MemoForm from '../../components/MemoForm/MemoForm';

const Error = styled.span`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
  margin: 0;
  padding: 0;
`;

const MiMemo = () => {
  return (
    <div>
      <Switch>
        <Route path="/memo-form/:noteid" render={(routeProps) => (<MemoForm {...routeProps} />)} />
        <Route path="/memo" component={Memo} />
        <Redirect exact from="/" to="/memo" />
        <Route
          render={() => (
            // eslint-disable-next-line jsx-a11y/accessible-emoji
            <Error role="img" aria-label="face with monocle">
              Jejda, tady nic nenajdeš! 🧐
            </Error>
          )}
        />
      </Switch>
    </div>
  );
};

export default MiMemo;
