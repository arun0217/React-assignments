import React, { useState } from 'react';
import styles from './Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Counter with useState</h2>
      <div className={styles.counter}>
        <div className={styles.countDisplay}>
          <span className={styles.countValue}>{count}</span>
        </div>
        <div className={styles.buttons}>
          <button 
            className={`${styles.button} ${styles.decrement}`}
            onClick={decrement}
            disabled={count <= 0}
          >
            -
          </button>
          <button 
            className={`${styles.button} ${styles.reset}`}
            onClick={reset}
          >
            Reset
          </button>
          <button 
            className={`${styles.button} ${styles.increment}`}
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;