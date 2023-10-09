import React from 'react';
import styles from './Rectangle.module.css';

function Rectangle({ title, isExpanded, onClick, grayText }) {
  return (
    <div className={styles.rectangleContainer}>
      <div
        className={`${styles.rectangle} ${isExpanded ? styles.expanded : ''}`}
        onClick={onClick}
      >
        <span className={styles.label}>{title}</span>
        <div className={styles.arrow}></div>
      </div>
      {isExpanded && (
        <div className={styles.grayRectangle}>
          <p>{grayText}</p>
        </div>
      )}
    </div>
  );
}

export default Rectangle;
