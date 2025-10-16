import React from 'react';
import FruitList from './components/FruitList/FruitList';
import UserList from './components/UserList/UserList';
import Counter from './components/Counter/Counter';
import ApiUserFetcher from './components/ApiUserFetcher/ApiUserFetcher';
import TodoApp from './components/TodoApp/TodoApp';
import RefDemo from './components/RefDemo/RefDemo';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <FruitList />
            <UserList />
            <Counter />
          </div>
          
          <div className={styles.column}>
            <ApiUserFetcher />
            <TodoApp />
            <RefDemo />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;