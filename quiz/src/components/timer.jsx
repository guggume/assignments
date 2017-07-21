import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const B = styled.b`
  font-size: 36px;
`;

export default class Timer extends Component {
  static propTypes = {
    time: PropTypes.number,
  }

  constructor(props) {
    super();

    const { time } = props;

    this.state = {
      start: Date.now(),
      remaining: time,
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.updateRemainingTime.bind(this), 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateRemainingTime() {
    const { time, onTimeout } = this.props;
    const remaining = time - (Date.now() - this.state.start) / 1000;

    if (remaining > 0) {
      this.setState({ remaining });
    } else {
      clearInterval(this.timer);

      this.setState({ remaining: 0 }, () => {
        onTimeout();
      });
    }
  }

  render() {
    const { remaining } = this.state;

    return (
      <B>{Math.ceil(remaining)}s</B>
    );
  }
}
