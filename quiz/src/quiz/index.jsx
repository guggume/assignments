import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Quiz from './quiz';

const API = 'https://opentdb.com/api.php?amount=20';

export default class QuizContainer extends Component {
  static propTypes = {
    name: PropTypes.string,
  }

  state = {
    questions: null,
  }

  componentDidMount() {
    this.api = fetch(API).then((resp) => {
      resp.json().then((data) => {
        this.setState({
          questions: data.results,
        });
      });
    });
  }

  render() {
    const { questions } = this.state;
    const { name } = this.props;

    return !questions ? (
      <h3>Loading...</h3>
    ) : (
      <Quiz questions={questions} name={name} />
    );
  }
}
