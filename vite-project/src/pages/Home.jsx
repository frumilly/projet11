import React from 'react';
import logementsData from '../../data/logements.json';
import styles from './Home.module.css'; // Import du fichier CSS modulaire
import Card from '../components/Card'
import Banner from "../components/Banner"
function Home() {
  return (
    <div>
      {/* Couverture */}
      <Banner
        coverImage="cover.PNG"
        text="Chez vous, partout et ailleurs"
      />

      {/* Cartes */}
      <div className={styles['card-container']}>

        {logementsData.map((logement) => (
          // ici le composant card
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>

  );
}

export default Home;
