import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Question from './question';
import Report from './report';
import Timer from '../components/timer';
import { TIME } from '../constants';

const QuizWrap = styled.section`
  position: relative;
`;
const Footer = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export default class Quiz extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired,
  }

  state = {
    score: 0,
    questionNo: 0,
  }

  updateScore = (points) => {
    console.log(this.state.score);

    this.setState({
      score: this.state.score + points,
      questionNo: ++this.state.questionNo,
    });
  }

  submitQuiz = () => {
    this.setState({
      questionNo: this.props.questions.length,
    });
  }

  render() {
    const { questionNo, score } = this.state;
    const { questions, name } = this.props;

    return questionNo < questions.length ? (
      <QuizWrap>
        <Question
          question={questions[questionNo]} sno={questionNo + 1}
          onSubmit={this.updateScore}
        />
        <Footer>
          <Timer time={TIME} onTimeout={this.submitQuiz} />
        </Footer>
      </QuizWrap>
    ) : (
      <Report name={name} score={score} total={questions.length} />
    )
  }
}
