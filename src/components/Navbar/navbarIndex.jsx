import styles from './navbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const NavbarItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'} <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/cinema-3d-icon-download-in-png-blend-fbx-gltf-file-formats--entertainment-movie-film-video-pack-icons-6185394.png"
        alt="Logo React Movies"
        className={styles.logo}
      />
      </button>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isOpen ? 300 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ background: 'lightgray', height: '100vh', overflow: 'hidden' }}
      >
        <nav className={styles.navbar}>
      

      <h1 className={styles.title}>RM</h1>
      
      <ul className={styles.navList}>
        <li >
          <Link to="/">
            <i className="ph ph-house"></i> 
            Home
          </Link>
        </li>
        <li >
          <Link to="/header">
            <i className="ph ph-star"></i>
                  Favoritos
          </Link>
        </li>
      </ul>
      
    </nav>
      </motion.div>
    </div>
  );
};

export default NavbarItem;



// const NavbarItem = () => {
//   return (
    // <nav className={styles.navbar}>
    //   <img
    //     src="https://cdn3d.iconscout.com/3d/premium/thumb/cinema-3d-icon-download-in-png-blend-fbx-gltf-file-formats--entertainment-movie-film-video-pack-icons-6185394.png"
    //     alt="Logo React Movies"
    //     className={styles.logo}
    //   />

    //   <h1 className={styles.title}>RM</h1>
      
    //   <ul className={styles.navList}>
    //     <li >
    //       <Link to="/">
    //         <i className="ph ph-house"></i> 
    //         Home
    //       </Link>
    //     </li>
    //     <li >
    //       <Link to="/header">
    //         <i className="ph ph-star"></i>
    //               Favoritos
    //       </Link>
    //     </li>
    //   </ul>
      
    // </nav>
//   );
// };

// export default NavbarItem;