import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../store/actions';
import { StyledForm, StyledInput } from './styled';

export const Input: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  return (
    <StyledForm>
      <StyledInput
        type='text'
        id='search'
        placeholder='Что будем искать?'
        onChange={(event) => dispatch(setSearchValue(event.target.value))}
      />
    </StyledForm>
  )
}

