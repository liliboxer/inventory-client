import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.css';

function Item({ item }) {
  console.log('item', item);
  return (
    <section className={styles.Item}>
      <div className={styles.itemWrapper}>
        <div className={styles.itemContent}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.category}>{item.category}</p>
        </div>
        <div className={styles.itemQuantity}>
          <button>-</button>
          <p className={styles.quantity}>{item.quantity}</p>
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
    quantity: PropTypes.number.isRequired 
  }).isRequired
};

export default Item;
