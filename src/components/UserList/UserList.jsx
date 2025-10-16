import React from 'react';
import styles from './UserList.module.css';

const UserList = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@email.com', role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@email.com', role: 'Designer' },
    { id: 3, name: 'Mike Johnson', email: 'mike@email.com', role: 'Manager' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@email.com', role: 'Analyst' },
    { id: 5, name: 'David Brown', email: 'david@email.com', role: 'Tester' }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User List with Unique Keys</h2>
      <div className={styles.userGrid}>
        {users.map(user => (
          <div key={user.id} className={styles.userCard}>
            <div className={styles.userAvatar}>
              {user.name.charAt(0)}
            </div>
            <div className={styles.userInfo}>
              <h3 className={styles.userName}>{user.name}</h3>
              <p className={styles.userEmail}>{user.email}</p>
              <span className={styles.userRole}>{user.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;