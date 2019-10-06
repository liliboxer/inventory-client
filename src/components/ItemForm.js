import React from 'react';
import PropTypes from 'prop-types';
import styles from './ItemForm.css';

function ItemForm() {
  const categories = ['Clothing', 'Books', 'Miscellaneous', 'Sentimental'];

  const createOptions = options => {
    return options.map(option => (
      <option key={option} value='${option}'>{option}</option>
    ));
  };
  
  return (
    <form className={styles.ItemForm}>
      <fieldset>
        <select>
          <option selected disabled hidden>Select Category</option>
          {createOptions(categories)}
        </select>
      </fieldset>
      <fieldset>
        <input type="text" placeholder="item"></input>
      </fieldset>
      <button>Submit</button>
    </form>
  );

}

ItemForm.propTypes = {

};

export default ItemForm;
