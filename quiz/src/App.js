import React, { Component } from 'react';
import styled from 'styled-components';
import Welcome from './welcome';
import QuizContainer from './quiz';

const Application = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 50px);
  margin: 24px;
  padding: 32px 16px;
  border: 1px solid rgba(0, 0, 0, .12);

  & > * {
    min-width: 480px;
  }
`;

class App extends Component {
  state = {
    user: null,
  }

  saveUser = (user) => {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <Application>
        {!user && <Welcome onSubmit={this.saveUser} />}
        {user && <QuizContainer name={user.name} /> }
      </Application>
    );
  }
}

export default App;
