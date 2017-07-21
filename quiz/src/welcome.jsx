import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from './components/text-field';
import Button from './components/button';
import { TIME } from './constants';

const H1 = styled.h1`
  font-size: 3rem;
  color: rgba(0, 0, 0, .87);
  text-align: center;
`;
const P = styled.p`
  font-size: 1.5rem;
  margin: 32px 0;
  text-align: center;
  color: rgba(0, 0, 0, .54);
`;
const Footer = styled.footer`
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 32px -16px;
`;
const Field = styled.div`
  width: 100%;
  padding: 16px;

  @media (min-width: 600px) {
    width: 50%;
  }
`;

export default class Welcome extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  submitUser = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      name: this.nameEl.value,
      email: this.emailEl.value,
      phone: this.phoneEl.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.submitUser}>
        <H1>Welcome to Trivia Quiz</H1>
        <Wrapper>
          <Field>
            <TextField
              name="name" placeholder="Name" required
              inputRef={(el) => { this.nameEl = el; }}
            />
          </Field>
          <Field>
            <TextField
              type="email" name="email" placeholder="Email"
              inputRef={(el) => { this.emailEl = el; }}
            />
          </Field>
          <Field>
            <TextField
              name="phone" placeholder="Phone"
              inputRef={(el) => { this.phoneEl = el; }}
            />
          </Field>
        </Wrapper>
        <P>Yo have {TIME} seconds to answer as many questions as you can.</P>
        <Footer>
          <Button type="submit">Start Quiz</Button>
        </Footer>
      </form>
    );
  }
}