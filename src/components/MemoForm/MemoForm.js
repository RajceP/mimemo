import React from 'react';
import { useHistory } from 'react-router-dom';

const MemoForm = props => {
  let memo = null;
  let history = useHistory();

  if (props.location.props) {
    memo = props.location.props;
    return <p>{memo.title}</p>;
  } else {
    history.push('/404');
    return null;
  }
};

export default MemoForm;
