import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function Items({ items }) {
  const itemsElement = items.map(item => (
    <li key={item._id}>
      <Item item={item}/>
    </li>
  ));
  
  if(items.length === 0) return 'No items catalogued';
  return <ul>{itemsElement}</ul>;
}

Items.propTypes = {
  items: PropTypes.array.isRequired
};

export default Items;
