import React, { useState } from 'react';
import styles from './About.module.css'; // Importez le fichier CSS modulaire

function About() {
  // État pour gérer l'affichage/masquage du texte en rouge
  const [showText, setShowText] = useState(false);

  // Fonction pour basculer l'affichage du texte en rouge
  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div className="page-container">
      {/* En-tête (ajoutez le contenu approprié) */}
      <header>
        {/* Logo et menu */}
      </header>

      {/* Contenu de la page */}
      <main>
        {/* Photo de couverture (ajoutez le contenu approprié) */}
        <div className={styles['about-cover-image']}></div>
      </main>
       <div className={styles['collapsesDiv']}>
      {/* Élément avec basculement */}
      <div className={styles['about-element']} onClick={toggleText}>
        <div className={styles['red-rectangle']}>
          <span className={styles['label']}>Fiabilité</span>
          <div className={styles['arrow']}></div>
        </div>
      </div>

      {/* Texte associé au basculement */}
      <div className={`${styles['gray-text']} ${showText ? styles['show'] : ''}`} >
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
      </div>

      {/* Élément avec basculement (ajoutez le contenu approprié) */}
      <div className={styles['about-element']} onClick={toggleText}>
        <div className={styles['red-rectangle']}>
          <span className={styles['label']}>Fiabilité</span>
          <div className={styles['arrow']}></div>
        </div>
      </div>

      {/* Texte associé au basculement (ajoutez le contenu approprié) */}
      <div className={`${styles['gray-text']} ${showText ? styles['show'] : ''}`}>
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
      </div>
      </div>

      {/* Pied de page (ajoutez le contenu approprié) */}
      <footer>
        {/* Contenu du pied de page */}
      </footer>
    </div>
  );
}

export default About;
