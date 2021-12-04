import { Component } from 'react';

import Container from './components/Container/Container';
import Statistic from './components/Statistic/Statistic';

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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return good === 0 ? 0 : Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    // const { good, neutral, bad } = this.state;

    return (
      <Container>
        <h2>Please leave your feedback</h2>
        <button type="button" onClick={this.handleIncrementGood}>
          Good
        </button>
        <button type="button" onClick={this.handleIncrementNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleIncrementBad}>
          Bad
        </button>
        <h2>Statistic</h2>
        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Container>
    );
  }
}

export default App;
