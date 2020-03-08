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
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  color: #e0ca3c;
`;

const Date = styled.div`
  color: #ffb86f;
`;

const Text = styled.div`
  font-size: 75%;
`;

const MemoCard = props => {
  return (
    <Link
      to={{ pathname: '/memo-form/' + props.memoid, props: props }}
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
