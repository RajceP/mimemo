import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Home, Save, Delete } from '@material-ui/icons';
import db from '../../db';

import Aux from '../../hoc/Auxiliary';
import AddButton from '../UI/Button/AddButton';
import DelButton from '../UI/Button/DelButton';
import BackButton from '../UI/Button/BackButton';

const StyledForm = styled.form`
  width: 90%;
  margin: auto auto 10px;
  padding: 8px;
  border: 2px solid #ba5c12;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
`;

const Text = styled.div`
  padding: 5px;
  text-align: left;
  font-size: 75%;
  color: #e0ca3c;
`;

const InputText = styled.input`
  width: 95%;
  margin: 6px auto;
  padding: 8px;
  border: 2px solid #ba5c12;
  border-radius: 6px;
  outline: 0;
  color: white;
  background-color: inherit;
  font: inherit;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
`;

const InputTextArea = styled.textarea`
  width: 95%;
  margin: 6px auto;
  padding: 8px;
  border: 2px solid #ba5c12;
  border-radius: 6px;
  outline: 0;
  resize: none;
  color: white;
  background-color: inherit;
  font: inherit;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
`;

const MemoForm = props => {
  const history = useHistory();
  const [memo, setMemo] = useState({
    date: new Date(),
    title: '',
    text: ''
  });

  useEffect(() => {
    let memoId = props.match.params.memoid;
    if (memoId !== 'new') {
      memoId = parseFloat(memoId);
      db.table('memos')
        .where({ memoid: memoId })
        .toArray()
        .then(value => {
          setMemo(value[0]);
        });
    }
  }, [props.match.params.memoid]);

  const handleAddMemo = () => {
    db.table('memos')
      .put(memo)
      .then(() => {
        history.push('/memo');
      });
  };

  const handleDelMemo = () => {
    db.table('memos')
      .where({ memoid: memo.memoid })
      .delete()
      .then(() => {
        history.push('/memo');
      });
  };

  const handleBack = () => {
    history.push('/memo');
  };

  return (
    <Aux>
      <StyledForm>
        <Text>Nadpis:</Text>
        <InputText
          type='text'
          value={memo?.title}
          onChange={event => setMemo({ ...memo, title: event.target.value })}
          required
        />
        <Text>Text:</Text>
        <InputTextArea
          type='text'
          value={memo?.text}
          onChange={event => setMemo({ ...memo, text: event.target.value })}
          required
          rows='10'
        />
      </StyledForm>
      <Aux>
        <BackButton clicked={handleBack}>
          <Home />
        </BackButton>
        <AddButton disabled={!memo.title || !memo.text} clicked={handleAddMemo}>
          <Save />
        </AddButton>
      </Aux>
      {memo.memoid && (
        <DelButton clicked={handleDelMemo}>
          <Delete />
        </DelButton>
      )}
    </Aux>
  );
};

export default MemoForm;
