import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, .42);
  padding: 8px 0;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, .87);

  &::placeholder {
    color: rgba(0, 0, 0, .42);
  }

  &:focus {
    padding-bottom: 7px;
    border-bottom: 2px solid #546E7A;
  }
`;

export default ({ inputRef, ...otherProps }) =>
  <Input type="text" innerRef={inputRef} {...otherProps} />;
