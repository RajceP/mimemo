import React, { useState } from 'react';

import MemoCard from './MemoCard/MemoCard';

const Memo = props => {
  const [memos, setMemos] = useState([
    {
      memoid: 1,
      date: '12.11.1111',
      title: 'Ahoj!',
      text: 'prdel prdel',
    },
    {
      memoid: 2,
      date: '16.7.222',
      title: 'Tady!',
      text: 'pšotekpes',
    },
  ]);

  let cards = null;

  cards = memos.map(memo => {
    return (
      <MemoCard
        key={memo.memoid}
        memoid={memo.memoid}
        date={memo.date}
        title={memo.title}
        text={memo.text}
      />
    );
  });

  return <div>{cards}</div>;
};

export default Memo;
