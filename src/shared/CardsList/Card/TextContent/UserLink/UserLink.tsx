import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatarImage}
        src="https://cdn.dribbble.com/users/45269/avatars/mini/bf78a8176a9b2b01792eca1f81a2baab.jpg?1489768376"
        alt="avatar"
      />
      <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
    </div>
  );
}
