import React, { useState } from 'react';
import styles from './Collapse.module.css';

function Collapse({ title, grayText, width }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Utilisez la valeur de la prop 'width' pour définir la largeur de l'élément .rectangle
  const rectangleStyle = {
    width: width || '1050px', // Utilisez la valeur de 'width' s'il est défini, sinon la valeur par défaut
  };

  return (
    <div className={styles.rectangleContainer}>
      <div
        className={`${styles.rectangle} ${isExpanded ? styles.expanded : ''}`}
        onClick={toggleExpansion}
        style={rectangleStyle}
      >
        <span className={styles.label}>{title}</span>
        <div className={styles.arrow}></div>
      </div>
      {isExpanded && (
        <div className={styles.grayRectangle} style={rectangleStyle}>
          <p>{grayText}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
