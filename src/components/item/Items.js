import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item/Item';
import styles from './Items.css';

function Items({ items }) {
  const itemsElement = items.map((item, i) => (
    <li key={i}>
      <Item item={item}/>
    </li>
  ));
  
  if(items.length === 0) return 'No items catalogued';
  return <ul className={styles.Items}>{itemsElement}</ul>;
}

Items.propTypes = {
  items: PropTypes.array
};

export default Items;
