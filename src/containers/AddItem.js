import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ItemForm from '../components/item/ItemForm';
import { addItem } from '../actions/itemActions';
import { clearActiveItem } from '../actions/activeItemActions';

class AddItem extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func
  }

  render() {
    const { handleSubmit, handleChange } = this.props;
    return <ItemForm actions={{ handleSubmit, handleChange }}/>;
  }
}

const mapDispatchToProps = dispatch => ({
  handleSubmit(item) {
    event.preventDefault();
    dispatch(addItem(item));
    dispatch(clearActiveItem());
  }, 
  handleChange() {
    console.log('change');
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddItem);
