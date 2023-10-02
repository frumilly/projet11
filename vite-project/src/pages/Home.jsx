import React from 'react';
import logementsData from '../../data/logements.json';
import styles from './Home.module.css'; // Import du fichier CSS modulaire

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
          <div className={styles.card} key={logement.id}>
            {/* Photo de couverture avec bord arrondi */}
            <div className={styles['card-cover-container']}>
              <img src={logement.cover} alt={logement.title} className={styles['card-cover']} />
            </div>
            {/* Titre du logement au-dessus de la photo */}
            <h3 className={styles['card-title']}>{logement.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
