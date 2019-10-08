import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.css';

function Item({ item }) {
  return (
    <section className={styles.Item}>
      <div className={styles.itemWrapper}>
        <div className={styles.itemContent}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.category}>{item.category}</p>
        </div>
        <div className={styles.itemCount}>
          <button>-</button>
          <p className={styles.count}>{item.count}</p>
          <button>+</button>
        </div>

      </div>
    </section>
  );
}

Item.propTypes = {
  item: PropTypes.shape({ 
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired 
  }).isRequired
};

export default Item;


// item: category, name, count
