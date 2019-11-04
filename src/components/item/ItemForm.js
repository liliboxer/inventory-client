import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ItemForm.css';

class ItemForm extends Component {
  state = {
    item: {
      category: '',
      name: '',
      quantity: 1
    }
  }

  static propTypes = {
    actions: PropTypes.shape({
      handleSubmit: PropTypes.func.isRequired,
      handleChange: PropTypes.func
    }).isRequired
  }

  render() {
    const { handleSubmit, handleChange } = this.props.actions;
    const { item } = this.state;
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
            onChange={e => handleChange({ ...item, category: e.target.value })}>
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
            onChange={e => handleChange({ ...item, name: e.target.value })}>
          </input>
        </fieldset>
        <fieldset>
          <input 
            type="text" 
            value={item.quantity} 
            placeholder="quantity"
            onChange={e => handleChange({ ...item, quantity: e.target.value })}>
          </input>
        </fieldset>
        <button>Submit</button>
      </form>
    );
    
  }


}

export default connect()(ItemForm);
