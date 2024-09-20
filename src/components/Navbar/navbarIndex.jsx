import styles from './navbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';



const NavbarItem = () => {
  return (
    <nav className={styles.navbar}>
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/cinema-3d-icon-download-in-png-blend-fbx-gltf-file-formats--entertainment-movie-film-video-pack-icons-6185394.png"
        alt="Logo React Movies"
        className={styles.logo}
      />

      <h1 className={styles.title}>RM</h1>
      
      <ul className={styles.navList}>
        <li >
          <Link to="/">
            <i class="ph ph-house"></i> 
            Início
          </Link>
        </li>
        <li >
          <Link to="/header">
            <i class="ph ph-star"></i>
            Favoritos
          </Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default NavbarItem;