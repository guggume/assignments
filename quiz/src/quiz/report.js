import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 48px;
  color: rgba(0, 0, 0, .87);
  text-align: center;
`;
const P = styled.p`
  font-size: 24px;
  margin: 32px;
  text-align: center;
  color: rgba(0, 0, 0, .54);
`;

export default class Report extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }

  render() {
    const { name, score, total } = this.props;

    return (
      <div>
        <H1>Time up!</H1>
        <P>Congratulations {name}!</P>
        <P>You got {score}/{total} answers right.</P>
      </div>
    );
  }
}