import styles from './navbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link to="/">Início</Link></li>
        <li className={styles.navItem}><Link to="/header">Catálogo de Filmes</Link></li>
      </ul>
    </nav>
  );
};

export default NavbarItem;