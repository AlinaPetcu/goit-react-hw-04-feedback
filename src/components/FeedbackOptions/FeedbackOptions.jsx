import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ handleFeedback }) => {
  return (
    <div className={css.container}>
      <h2>Please leave feedback</h2>
      <div className={css.btnContainer}>
        <button
          className={css.goodbtn}
          type="button"
          onClick={() => handleFeedback('good')}
        >
          Good
        </button>
        <button
          className={css.neutralbtn}
          type="button"
          onClick={() => handleFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          className={css.badbtn}
          type="button"
          onClick={() => handleFeedback('bad')}
        >
          Bad
        </button>
      </div>
    </div>
  );
};

export default FeedbackOptions;