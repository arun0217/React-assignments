import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../../store/slices/todoSlice';
import styles from './TodoApp.module.css';

const TodoApp = () => {
  const [todoText, setTodoText] = useState('');
  const todos = useSelector(state => state.todos.items);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      dispatch(addTodo(todoText.trim()));
      setTodoText('');
    }
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Redux Todo App</h2>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter a new todo..."
          className={styles.input}
        />
        <button type="submit" className={styles.addButton}>
          Add Todo
        </button>
      </form>

      <div className={styles.todoList}>
        {todos.length === 0 ? (
          <p className={styles.empty}>No todos yet. Add one above!</p>
        ) : (
          todos.map(todo => (
            <div key={todo.id} className={styles.todoItem}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
                className={styles.checkbox}
              />
              <span 
                className={`${styles.todoText} ${todo.completed ? styles.completed : ''}`}
                onClick={() => handleToggle(todo.id)}
              >
                {todo.text}
              </span>
              <button 
                onClick={() => handleRemove(todo.id)}
                className={styles.deleteButton}
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>

      <div className={styles.stats}>
        <p>Total: {todos.length}</p>
        <p>Completed: {todos.filter(todo => todo.completed).length}</p>
        <p>Pending: {todos.filter(todo => !todo.completed).length}</p>
      </div>
    </div>
  );
};

export default TodoApp;