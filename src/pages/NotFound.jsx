import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.errorTitle}>Page Not Found</h2>
          <p className={styles.errorMessage}>
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <Link to="/" className={styles.homeButton}>
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;