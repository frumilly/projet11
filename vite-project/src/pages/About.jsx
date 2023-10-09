import React, { useState } from 'react';
import styles from './About.module.css';
import Banner from '../components/Banner';
import Rectangle from '../components/Rectangle';

function About() {
  //Pourquoi useState? Réactivité,Rendu conditionnel rapide,Optimisation des performances , utilisation dans les fonctions spécaiales de react les hook
  const [expandedRectangles, setExpandedRectangles] = useState([false, false, false, false]);

  const toggleExpansion = (index) => {
    const newExpandedRectangles = [...expandedRectangles];
    newExpandedRectangles[index] = !newExpandedRectangles[index];
    setExpandedRectangles(newExpandedRectangles);
  };

  // Définissez les titres et les textes pour chaque rectangle
  const rectanglesData = [
    { title: 'Fiabilité', grayText: ' Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
    { title: 'Respect', grayText: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Service', grayText: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Sécurité', grayText: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locatairen cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' },
  ];

  return (
    <div>
      {/* Photo de couverture différente */}
      <Banner
        coverImage="about_cover.PNG"
        text=""
      />
      <div className={styles.container}>
        {expandedRectangles.map((isExpanded, index) => (
          <Rectangle
            key={index}
            title={rectanglesData[index].title}
            isExpanded={isExpanded}
            onClick={() => toggleExpansion(index)}
            grayText={rectanglesData[index].grayText}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
