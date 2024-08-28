import React from 'react';
import css from '../App.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div>
      <h2>Statistics</h2>
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
          <p>Total: {total}</p>
        </li>
        <li>
          <p className={css.good}>Positive feedback: {positiveFeedback}%</p>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;