import React, { useState } from 'react';
import styles from './Test.module.css';

function Test() {
  const [expandedRectangles, setExpandedRectangles] = useState([false, false, false, false]);

  const toggleExpansion = (index) => {
    const newExpandedRectangles = [...expandedRectangles];
    newExpandedRectangles[index] = !newExpandedRectangles[index];
    setExpandedRectangles(newExpandedRectangles);
  };

  return (
    <div className={styles.container}>
      {expandedRectangles.map((isExpanded, index) => (
        <div key={index} className={styles.rectangleContainer}>
          <div
            className={styles.rectangle}
            onClick={() => toggleExpansion(index)}
          >
            <span className={styles.label}>Cliquez-moi</span>
            <div className={styles.arrow}></div>
          </div>
          {isExpanded && (
            <div className={styles.grayRectangle}>
              <p>Texte {index + 1}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Test;
