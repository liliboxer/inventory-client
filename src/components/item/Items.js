import React from 'react';
import PropTypes from 'prop-types';
import Item from '../../containers/Item';
import styles from './Items.css';

function Items({ items, history }) {
  const itemsElement = items.map((item, i) => (
    <li key={i}>
      <Item item={item} history={history}/>
    </li>
  ));
  
  if(items.length === 0) return 'No items catalogued';
  return <ul className={styles.Items}>{itemsElement}</ul>;
}

Items.propTypes = {
  items: PropTypes.array,
  history: PropTypes.object
};

export default Items;
