import React, { useState, useRef, useEffect } from 'react';
import styles from './RefDemo.module.css';

const RefDemo = () => {
  const [renderCount, setRenderCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const countRef = useRef(0);
  const inputRef = useRef(null);
  const previousValueRef = useRef('');

  // This will run on every render
  useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  // Update ref without causing re-render
  const updateRef = () => {
    countRef.current += 1;
    console.log('Ref value:', countRef.current);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  const clearInput = () => {
    setInputValue('');
    inputRef.current.value = '';
    previousValueRef.current = inputValue;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>useRef Hook Demo</h2>
      
      <div className={styles.demoSection}>
        <h3>1. Persisting Values without Re-renders</h3>
        <div className={styles.counterDemo}>
          <p>Component re-render count: <strong>{renderCount}</strong></p>
          <p>Ref value (no re-render): <strong>{countRef.current}</strong></p>
          <button onClick={updateRef} className={styles.button}>
            Increment Ref (No Re-render)
          </button>
          <button 
            onClick={() => setRenderCount(0)} 
            className={styles.buttonSecondary}
          >
            Reset Render Count
          </button>
        </div>
      </div>

      <div className={styles.demoSection}>
        <h3>2. DOM Element Access</h3>
        <div className={styles.inputDemo}>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
            className={styles.input}
          />
          <div className={styles.buttonGroup}>
            <button onClick={focusInput} className={styles.button}>
              Focus Input
            </button>
            <button onClick={clearInput} className={styles.button}>
              Clear Input
            </button>
          </div>
          <p>Current value: {inputValue}</p>
          <p>Previous value: {previousValueRef.current}</p>
        </div>
      </div>

      <div className={styles.demoSection}>
        <h3>3. Timer without Re-renders</h3>
        <TimerDemo />
      </div>

      <div className={styles.explanation}>
        <h4>Key Points:</h4>
        <ul>
          <li>useRef values persist between re-renders</li>
          <li>Changing ref values does NOT trigger re-renders</li>
          <li>Refs can hold any value, not just DOM elements</li>
          <li>Perfect for values that need to persist but don't affect UI</li>
        </ul>
      </div>
    </div>
  );
};

// Separate component for timer demo
const TimerDemo = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return;
    
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div className={styles.timerDemo}>
      <div className={styles.timerDisplay}>
        Time: <strong>{time}s</strong>
      </div>
      <div className={styles.buttonGroup}>
        <button onClick={startTimer} className={styles.button}>
          Start
        </button>
        <button onClick={stopTimer} className={styles.button}>
          Stop
        </button>
        <button onClick={resetTimer} className={styles.button}>
          Reset
        </button>
      </div>
      <p>Timer ID stored in ref: {intervalRef.current ? 'Running' : 'Stopped'}</p>
    </div>
  );
};

export default RefDemo;