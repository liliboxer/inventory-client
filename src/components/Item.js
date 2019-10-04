import React from 'react';
import PropTypes from 'prop-types';

function Item({ item }) {
  return (
    <section>
      Working
      <div>
        <h6>{item.category}</h6>
        <p>{item.name}</p>
      </div>
      <div>
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
