import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ItemForm.css';
import { getActiveItem } from '../../selectors/activeItemSelectors';

class ItemForm extends Component {
  state = {
    category: '',
    name: '',
    quantity: 1
  }

  static propTypes = {
    actions: PropTypes.shape({
      handleSubmit: PropTypes.func.isRequired,
      handleUpdate: PropTypes.func
    }).isRequired,
    activeItem: PropTypes.object
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { handleSubmit, handleUpdate } = this.props.actions;
    const { activeItem } = this.props;

    const { category, name, quantity } = this.state;

    const categories = ['Clothing', 'Books', 'Miscellaneous', 'Sentimental'];
    const createOptions = options => {
      return options.map(option => (
        <option key={option} value={option}>{option}</option>
      ));
    };

    // if we are in editing mode 
    if(activeItem.category !== '') {
      console.log('active item category', activeItem.category);
      return (
        <form className={styles.ItemForm}>
          <fieldset>
            <select 
              value={activeItem.category} 
              name="category"
              onChange={this.handleChange}>
              <option 
                disabled>Category</option>
              {createOptions(categories)}
            </select>
          </fieldset>
          <fieldset>
            <input 
              type="text"
              name="name"
              value={activeItem.name}
              placeholder="item"
              onChange={this.handleChange}>
            </input>
          </fieldset>
          <fieldset>
            <input 
              type="text" 
              name="quantity"
              value={activeItem.quantity} 
              placeholder="quantity"
              onChange={this.handleChange}>
            </input>
          </fieldset>
          <button onClick={() => handleUpdate()}>Update Item</button>
        </form>
      );
    } else {
      // otherwise we are in creating a new item
      return (
        <form className={styles.ItemForm}>
          <fieldset>
            <select 
              defaultValue={'DEFAULT'} 
              name="category"
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
          <button onClick={() => handleSubmit({ category, name, quantity })}>Submit</button>
        </form>
      );
    }

  }
}

const mapStateToProps = state => ({
  activeItem: getActiveItem(state)
});

export default connect(
  mapStateToProps
)(ItemForm);

// listener for activeItem state 
// one part of the handshake, need the other 

// activeItem id matches with item id;
