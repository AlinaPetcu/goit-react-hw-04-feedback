import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return total > 0 ? ((good / total) * 100).toFixed(2) : 0;
  };
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div>
      <ul className={css.statistics}>
        <li>
          <p className={css.good}>Good: {good}</p>
        </li>
        <li>
          <p className={css.neutral}>Neutral: {neutral}</p>
        </li>
        <li>
          <p className={css.bad}>Bad: {bad}</p>
        </li>
        <li>
          <p>Total:{total}</p>
        </li>
        <li>
          <p className={css.good}>Positive feedback : {positiveFeedback}%</p>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;