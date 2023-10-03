import React from 'react';
import logementsData from '../../data/logements.json';
import styles from './Home.module.css'; // Import du fichier CSS modulaire
import Card from '../components/Card'
function Home() {
  return (
    <div>
      {/* Couverture */}
      <div className={styles['cover-image']}>
        <h2>Chez vous, partout et ailleurs</h2>
      </div>

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
