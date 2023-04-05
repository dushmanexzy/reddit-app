import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/users/904433/screenshots/4315630/react_flux_dribbble.png?compress=1&resize=400x300&vertical=top"
        alt="post image"
      />
    </div>
  );
}
