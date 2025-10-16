import React from 'react';
import styles from './FruitList.module.css';

const FruitList = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Strawberry', 'Pineapple'];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Fruit List using map()</h2>
      <ul className={styles.fruitList}>
        {fruits.map((fruit, index) => (
          <li key={index} className={styles.fruitItem}>
            <span className={styles.fruitIcon}>🍎</span>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;