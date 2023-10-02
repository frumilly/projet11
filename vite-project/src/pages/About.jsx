import React, { useState, useEffect } from 'react';
import styles from './About.module.css'; // fichier CSS modulaire
import { Collapse} from 'react-bootstrap'; // Importez Collapse depuis react-bootstrap

function About() {
  // État pour gérer l'affichage/masquage du texte en rouge (initialisé à false)
  const [showText, setShowText] = useState(false);

  // Fonction pour basculer l'affichage du texte en rouge
  const toggleText = () => {
    setShowText(!showText);
  };


  return (
    <div>
     
      {/* Photo de couverture différente */}
      <div className={styles['about-cover-image']}></div>

      <div className={styles['collapsesDiv']}>
      <div className={styles['about-element']} onClick={toggleText}>
        <div className={styles['red-rectangle']}>
          <span className={styles['label']}>Fiabilité</span>
          <div className={styles['arrow']}></div>
        </div>
      </div>

      {/* Texte en rouge (affiché uniquement si showText est vrai) */}
      <Collapse in={showText}>
        <div className={styles['gray-text']} id="collapse-text">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </div>
      </Collapse>
      </div>
    </div>
  );
}

export default About;
