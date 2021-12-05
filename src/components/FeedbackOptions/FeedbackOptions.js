import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <>
        <button
          className={s.button}
          name="good"
          type="button"
          onClick={e => onLeaveFeedback(e.target.name)}
        >
          Good
        </button>
        <button
          className={s.button}
          name="neutral"
          type="button"
          onClick={e => onLeaveFeedback(e.target.name)}
        >
          Neutral
        </button>
        <button
          className={s.button}
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
