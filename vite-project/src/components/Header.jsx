import React from 'react';
import styles from './Header.module.css'; // Import du fichier CSS modulaire
import { Link } from 'react-router-dom'; 

export default function Header() {
  return (
    <header className={styles.header}> {/* Utilisation de la classe CSS modulaire */}
      <div className={styles['header-left']}>
        <div className={styles.logo}></div>
      </div>
      <div className={styles['header-right']}>
      <nav className={styles['header-nav']}>
          <ul>
            <li>
              <Link to="/" className={styles['nav-link']}>Accueil</Link>
            </li>
            <li>
              <Link to="/a-propos" className={styles['nav-link']}>À propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
