import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ItemForm.css';

function ItemForm(props) {
  const { handleSubmit } = props.actions;
  const [item, updateItem] = useState({
    category: '',
    name: '',
    quantity: 1
  });

  const categories = ['Clothing', 'Books', 'Miscellaneous', 'Sentimental'];
  const createOptions = options => {
    return options.map(option => (
      <option key={option} value={option} >{option}</option>
    ));
  };
  
  return (
    <form className={styles.ItemForm} 
      onSubmit={() => handleSubmit(item)}>
      <fieldset>
        <select 
          defaultValue={'DEFAULT'} 
          name="categories"
          onChange={e => updateItem({ ...item, category: e.target.value })}>
          <option 
            value="DEFAULT" 
            disabled>Category</option>
          {createOptions(categories)}
        </select>
      </fieldset>
      <fieldset>
        <input 
          type="text"
          value={item.name}
          placeholder="item"
          onChange={e => updateItem({ ...item, name: e.target.value })}>
        </input>
      </fieldset>
      <fieldset>
        <input 
          type="text" 
          value={item.quantity} 
          placeholder="quantity"
          onChange={e => updateItem({ ...item, quantity: e.target.value })}>
        </input>
      </fieldset>
      <button>Submit</button>
    </form>
  );
}

ItemForm.propTypes = {
  actions: PropTypes.shape({
    handleSubmit: PropTypes.func.isRequired
  }).isRequired
};


export default ItemForm;
