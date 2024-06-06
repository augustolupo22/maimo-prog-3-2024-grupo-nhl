import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h3>Sobre nosotros</h3>
        <p> Ver las Comidas. @Copyright</p>
      </div>
      <div className={styles.column}>
        <h3>Links</h3>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Sobre nosotros</a></li>
          <li><a href="">Contacto</a></li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>Contactos</h3>
        <ul className={styles.socials}>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;