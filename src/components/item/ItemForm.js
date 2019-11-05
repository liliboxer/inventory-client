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
      handleSubmit: PropTypes.func.isRequired
    }).isRequired,
    activeItem: PropTypes.object
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { handleSubmit } = this.props.actions;
    const { category, name, quantity } = this.state;
    const { activeItem } = this.props;

    if(!activeItem) {
      console.log('no active item');
    } else {
      console.log('activeItem', activeItem);
    }

    const categories = ['Clothing', 'Books', 'Miscellaneous', 'Sentimental'];
    const createOptions = options => {
      return options.map(option => (
        <option key={option} value={option}>{option}</option>
      ));
    };

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

const mapStateToProps = state => ({
  activeItem: getActiveItem(state)
});

export default connect(
  mapStateToProps
)(ItemForm);

// listener for activeItem state 
// one part of the handshake, need the other 
