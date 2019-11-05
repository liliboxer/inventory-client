import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ItemForm.css';

class ItemForm extends Component {
  state = {
    category: '',
    name: '',
    quantity: 1
  }

  static propTypes = {
    actions: PropTypes.shape({
      handleSubmit: PropTypes.func.isRequired
    }).isRequired
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { handleSubmit } = this.props.actions;
    const { category, name, quantity } = this.state;
    
    const categories = ['Clothing', 'Books', 'Miscellaneous', 'Sentimental'];
    const createOptions = options => {
      return options.map(option => (
        <option key={option} value={category} >{option}</option>
      ));
    };

    return (
      <form className={styles.ItemForm} onSubmit={() => handleSubmit({ category, name, quantity })}>
        <fieldset>
          <select 
            defaultValue={'DEFAULT'} 
            name="categories"
            onChange={this.handleChange}>
            <option 
              value="DEFAULT" 
              disabled>Category</option>
            {createOptions(categories)}
          </select>
        </fieldset>
        <fieldset>
          <input 
            type="text"
            name="name"
            value={name}
            placeholder="item"
            onChange={this.handleChange}>
          </input>
        </fieldset>
        <fieldset>
          <input 
            type="text" 
            name="quantity"
            value={quantity} 
            placeholder="quantity"
            onChange={this.handleChange}>
          </input>
        </fieldset>
        <button>Submit</button>
      </form>
    );
  }
}

export default connect()(ItemForm);

// listener for activeItem state 
// one part of the handshake, need the other 
