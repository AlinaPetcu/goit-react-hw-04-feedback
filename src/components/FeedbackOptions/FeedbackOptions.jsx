import React from 'react';
import css from '../App.module.css';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <div className={css.container}>
      <h2>Please leave feedback</h2>
      <div className={css.btnContainer}>
        <button
          className={css.goodbtn}
          type="button"
          onClick={onGood}
        >
          Good
        </button>
        <button
          className={css.neutralbtn}
          type="button"
          onClick={onNeutral}
        >
          Neutral
        </button>
        <button
          className={css.badbtn}
          type="button"
          onClick={onBad}
        >
          Bad
        </button>
      </div>
    </div>
  );
};

export default FeedbackOptions;