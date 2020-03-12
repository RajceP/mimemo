import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import db from '../../db';
import styled from 'styled-components';

import MemoCard from './MemoCard/MemoCard';
import Aux from '../../hoc/Auxiliary';
import Button from '../UI/Button/AddButton';

const None = styled.span`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
  margin: 0;
  padding: 0;
`;

const Memo = () => {
  const [memos, setMemos] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    db.table('memos')
      .toArray()
      .then(memos => {
        setMemos(memos);
        setLoading(false);
      });
  }, []);

  let cards = null;

  if (memos?.length) {
    cards = memos.map(memo => {
      const date =
        memo.date.getDate() +
        '-' +
        parseInt(memo.date.getMonth() + 1) +
        '-' +
        memo.date.getFullYear();
      return (
        <MemoCard
          key={memo.memoid}
          memoid={memo.memoid}
          date={date}
          title={memo.title}
          text={memo.text}
        />
      );
    });
  } else if (!loading) {
    cards = (
      // eslint-disable-next-line jsx-a11y/accessible-emoji
      <None role="img" aria-label="face with monocle">
        Jejda, nemáš žádné poznámky! 🧐
      </None>
    );
  }

  return (
    <Aux>
      <div>{cards}</div>
      <Button clicked={() => history.push('/memo-form/new')}>+</Button>
    </Aux>
  );
};

export default Memo;
