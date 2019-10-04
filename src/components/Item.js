import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.css';

function Item({ item }) {
  return (
    <section className={styles.Item}>
      <div className={styles.itemContent}>
        <h3>{item.category}</h3>
        <p>{item.name}</p>
      </div>
      <div className={styles.itemCount}>
        <button>-</button>
        <p>{item.count}</p>
        <button>+</button>
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
