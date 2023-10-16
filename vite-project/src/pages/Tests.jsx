import React, { useState } from 'react';
import styles from './Test.module.css';

function Test() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.collapse} ${isExpanded ? styles.expanded : ''}`} onClick={toggleCollapse}>
        <span className={styles.label}>Titre du Collapse</span>
        <div className={styles.arrow}></div>
      </div>
      {isExpanded && (
        <div className={styles.grayRectangle}>
          <p>Contenu du Collapse</p>
        </div>
      )}
    </div>
  );
}

export default Test;
