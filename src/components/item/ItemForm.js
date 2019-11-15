import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ItemForm.css';
import { getActiveItem } from '../../selectors/activeItemSelectors';

class ItemForm extends Component {
  state = {
    category: '',
    name: '',
    quantity: ''
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

    console.log('activeItem', activeItem);
    console.log('state', this.state);

    // grab values out of state
    let { category, name, quantity } = this.state;

    // conditionally using active item for each attribute 
    // unless we already have state for that attribute 
    if(activeItem.name) {
      if(category === '') category = activeItem.category;
      
      if(name === '') name = activeItem.name;
      
      if(quantity === '') quantity = activeItem.quantity;
    }

    // dictionary for select element so we can conditionaly render attributes 
    let selectProps = {
      defaultValue: 'DEFAULT',
      name: 'category',
      onChange: this.handleChange
    };

    // conditionally adding the value attribute 
    if(category) selectProps.value = category;
    // category ? selectProps.value = category : selectProps.value = selectProps.defaultValue;



    const categories = ['Clothing', 'Books', 'Miscellaneous', 'Sentimental'];
    const createOptions = options => {
      return options.map(option => (
        <option key={option} value={option}>{option}</option>
      ));
    };

    return (
      <form className={styles.ItemForm}>
        <fieldset>
          <select {...selectProps}>
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
        { activeItem.name
          ? <button onClick={() => handleUpdate()}>Update Item</button> 
          : <button onClick={() => handleSubmit({ category, name, quantity })}>Submit</button>
        }
      </form>
    );
  }
}

const mapStateToProps = state => ({
  activeItem: getActiveItem(state)
});

export default connect(
  mapStateToProps
)(ItemForm);


// reset form button should:
///reset form values all to default 
/// clear out activeItem from redux
