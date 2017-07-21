import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  height: 36px;
  line-height: 36px;
`;

const Input = styled.input`
  width: 24px;
  margin: 0 6px;
`;

export default (props) => {
  const { options, value, onChange, ...otherProps } = props;

  return (
    <div>
      {options.map((opt, i) =>
        <Label key={i}>
          <Input
            type="radio" value={opt} {...otherProps}
            checked={value === opt}
            onChange={(e) => onChange(e.target.value)}
          />
          <span dangerouslySetInnerHTML={{ __html: opt }} />
        </Label>
      )}
    </div>
  );
};
