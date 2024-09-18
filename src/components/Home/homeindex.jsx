import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './homeindex.module.css';

export function HomeItem() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/header');
  };

  return (
    <div>
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/cinema-3d-icon-download-in-png-blend-fbx-gltf-file-formats--entertainment-movie-film-video-pack-icons-6185394.png"
        alt="Logo React Movies"
        className={styles.logo}
      />
      <h1 className={styles.title}>React Movies</h1>
      <button className={styles.loginButton} onClick={handleLoginClick}>
        Entrar
      </button>
    </div>
  );
}

export default HomeItem;
