import React from 'react';
import styles from './About.module.css';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

function About() {
  // Définissez les titres et les textes pour chaque rectangle
  const rectanglesData = [
    { title: 'Fiabilité', grayText: ' Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
    { title: 'Respect', grayText: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Service', grayText: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Sécurité', grayText: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locatairen cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' },
  ];

  return (
    <div>
      <Banner
        coverImage="about_cover.PNG"
        text=""
      />
      <div className={styles.container}>
        {rectanglesData.map((data, index) => (
          <Collapse
            key={index}
            title={data.title}
            grayText={data.grayText}
            width="1050px" 
          />
        ))}
      </div>
    </div>
  );
}

export default About;
