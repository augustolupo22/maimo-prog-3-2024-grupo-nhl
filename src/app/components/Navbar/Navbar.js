import React from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image 
          src="/logocomida.png" 
          alt="Logo" 
          width={50}
          height={50} 
          className={styles.logoImage} 
        />
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Buscar..." />
        <button className={styles.searchButton}>Buscar</button>
      </div>
      <div className={styles.sections}>
        <div className={styles.section}>Home</div>
        <div className={styles.section}>Sobre nosotros</div>
        <div className={styles.section}>Contacto</div>
      </div>
    </nav>
  );
};

export default Navbar;
