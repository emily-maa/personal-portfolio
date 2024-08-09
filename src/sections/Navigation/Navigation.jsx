import React,{useState} from 'react'
import styles from './NavigationStyles.module.css'

export const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={styles.navbar}>
        <div class={styles.hamburger} onClick={toggleMenu}>&#9776;</div>
        <ul className={`${styles.navlist} ${isMenuOpen ? styles.active : ''}`}>
        {/* <ul className={styles.navlist}> */}
            <li className={styles.navitem}>
                <a href="#hero">Home</a>
            </li>
            <li className={styles.navitem}>
                <a href="#projects">Projects</a>
            </li>
            <li className={styles.navitem}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </nav>
  );
}
