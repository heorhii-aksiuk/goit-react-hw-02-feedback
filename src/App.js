import { Component } from 'react';

import Container from './components/Container/Container';

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleIncrementBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <h2>Please leave your feedback</h2>
        <button type="button" name="good" onClick={this.handleIncrementGood}>
          Good
        </button>
        <button
          type="button"
          name="neutral"
          onClick={this.handleIncrementNeutral}
        >
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handleIncrementBad}>
          Bad
        </button>
        <h2>Statistic</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
      </Container>
    );
  }
}

export default App;
