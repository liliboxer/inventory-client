import React from 'react';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <h1>Inventory</h1>
      <p>Count how many things you own!</p>
    </header>
  );
}
