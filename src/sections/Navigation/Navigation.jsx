import React from 'react'
import styles from './NavigationStyles.module.css'

export const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlist}>
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
