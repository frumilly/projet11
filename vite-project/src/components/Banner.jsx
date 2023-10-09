import React from 'react';
import styles from './Banner.module.css';

export default function Banner({ coverImage, text }) {
  return (
    <div className={styles['cover-image']} style={{ backgroundImage: `url(${coverImage})` }}>
      <h2>{text}</h2>
    </div>
  );
}


