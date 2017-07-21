import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../components/button';
import RadioGroup from '../components/radio-group';
import { shuffle } from '../utils';

const H1 = styled.h1`
  font-size: 1.5rem;
  color: rgba(0, 0, 0, .87);

  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;
const Wrapper = styled.div`
  margin: 16px 0;
`;

export default class Question extends Component {
  static propTypes = {
    sno: PropTypes.number,
    question: PropTypes.shape({
      question: PropTypes.string.isRequired,
      correct_answer: PropTypes.string.isRequired,
      incorrect_answers: PropTypes.array.isRequired,
    }),
    onSubmit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    const { correct_answer, incorrect_answers } = props.question;

    this.state = {
      question: {
        ...props.question,
        options: shuffle([...incorrect_answers, correct_answer]),
      },
      answer: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { correct_answer, incorrect_answers } = nextProps.question;

    this.setState({
      question: {
        ...nextProps.question,
        options: shuffle([...incorrect_answers, correct_answer]),
      }
    });
  }

  updateAnswer = (value) => {
    this.setState({
      answer: value,
    });
  }

  submitAnswer = (e) => {
    e.preventDefault();

    const { question, onSubmit } = this.props;
    onSubmit(question.correct_answer === this.state.answer ? 1 : 0);
  }

  render() {
    const { answer, question } = this.state;
    const { sno } = this.props;

    return (
      <form onSubmit={this.submitAnswer}>
        <H1>
          {sno}. <span dangerouslySetInnerHTML={{ __html: question.question }} />
        </H1>
        <Wrapper>
          <RadioGroup
            name="option" options={question.options} value={answer} required
            onChange={this.updateAnswer}
          />
        </Wrapper>
        <Button type="submit">{sno === 20 ? 'Finish' : 'Next'}</Button>
      </form>
    );
  }
}
