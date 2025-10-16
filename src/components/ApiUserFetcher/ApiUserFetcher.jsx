import React, { useState, useEffect } from 'react';
import styles from './ApiUserFetcher.module.css';

const ApiUserFetcher = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>API Data Fetching with useEffect</h2>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>API Data Fetching with useEffect</h2>
        <div className={styles.error}>
          <p>Error: {error}</p>
          <button 
            className={styles.retryButton}
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>API Data Fetching with useEffect</h2>
      <div className={styles.userList}>
        {users.map(user => (
          <div key={user.id} className={styles.userCard}>
            <div className={styles.userHeader}>
              <h3 className={styles.userName}>{user.name}</h3>
              <span className={styles.userUsername}>@{user.username}</span>
            </div>
            <div className={styles.userDetails}>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>
              <p><strong>Company:</strong> {user.company.name}</p>
              <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiUserFetcher;