import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MemoCardDiv = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 10px;
  padding: 8px;
  border: 2px solid #ba5c12;
  border-radius: 12px;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  color: #e0ca3c;
`;

const Date = styled.div`
  font-size: 75%;
  color: #ffb86f;
`;

const Text = styled.div`
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 75%;
`;

const MemoCard = props => {
  return (
    <Link
      to={{ pathname: '/memo-form/' + props.memoid }}
      style={{ color: 'inherit', textDecoration: 'inherit' }}
    >
      <MemoCardDiv>
        <Header>
          <Title>{props.title}</Title>
          <Date>{props.date}</Date>
        </Header>
        <Text>{props.text}</Text>
      </MemoCardDiv>
    </Link>
  );
};

export default MemoCard;
