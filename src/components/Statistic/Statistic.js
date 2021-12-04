import { Component } from 'react';

class Statistic extends Component {
  render() {
    const { total, positivePercentage } = this.props;
    const { good, neutral, bad } = this.props.state;
    return (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    );
  }
}

export default Statistic;
