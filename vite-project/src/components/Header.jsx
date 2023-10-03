import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-left']}>
        <div className={styles.logo}></div>
      </div>
      <div className={styles['header-right']}>
        <nav className={styles['header-nav']}>
          <ul>
            <li>

              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? styles['nav-link'] : isActive ? styles['active-link'] : styles['nav-link']
                }
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/a-propos"
                className={({ isActive, isPending }) =>
                  isPending ? styles['nav-link'] : isActive ? styles['active-link'] : styles['nav-link']
                }
              >
                À propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
