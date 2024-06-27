import React from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'>
          <Image 
            src="/logocomida.png" 
            alt="Logo" 
            width={50}
            height={50} 
            className={styles.logoImage} 
          />
        </Link>
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Buscar..." />
        <button className={styles.searchButton}>Buscar</button>
      </div>
      <div className={styles.sections}>
        <Link href="/" className={styles.button}>Home</Link>
        <div className={styles.section}>Sobre nosotros</div>
        <div className={styles.section}>Contacto</div>
      </div>
    </nav>
  );
};

export default Navbar;
