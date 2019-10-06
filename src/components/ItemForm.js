import React from 'react';
import PropTypes from 'prop-types';

function ItemForm() {
  const categories = ['Clothing', 'Books', 'Miscellaneous', 'Sentimental'];

  const createOptions = options => {
    return options.map(option => (
      <option key={option} value='${option}'>{option}</option>
    ));
  };
  
  return (
    <form>
      <fieldset>
        <legend>Category:</legend>
        <select>
          <option selected></option>
          {createOptions(categories)}
        </select>
      </fieldset>
     
    </form>
  );

}

ItemForm.propTypes = {

};

export default ItemForm;
