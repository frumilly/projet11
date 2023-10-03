import React from 'react';
import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';

export default function Card({ logement }) {
  return (
    <div className={styles.card}>
      {/* Utilisation de NavLink pour envelopper le contenu de la carte */}
      <NavLink to={`/details/${logement.id}`} className={styles['card-link']}>
        {/* Photo de couverture avec bord arrondi */}
        <div className={styles['card-cover-container']}>
          <img src={logement.cover} alt={logement.title} className={styles['card-cover']} />
        </div>
        {/* Titre du logement au-dessus de la photo */}
        <h3 className={styles['card-title']}>{logement.title}</h3>
      </NavLink>
    </div>
  );
}
