import { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <>
        <button
          name="good"
          type="button"
          onClick={e => onLeaveFeedback(e.target.name)}
        >
          Good
        </button>
        <button
          name="neutral"
          type="button"
          onClick={e => onLeaveFeedback(e.target.name)}
        >
          Neutral
        </button>
        <button
          name="bad"
          type="button"
          onClick={e => onLeaveFeedback(e.target.name)}
        >
          Bad
        </button>
      </>
    );
  }
}
export default FeedbackOptions;
