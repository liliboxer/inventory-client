import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ItemForm from '../components/item/ItemForm';
import { addItem, updateItem } from '../actions/itemActions';
import { clearActiveItem } from '../actions/activeItemActions';

class AddItem extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func
  }

  render() {
    const { handleSubmit, handleUpdate } = this.props;
    return <ItemForm actions={{ handleSubmit, handleUpdate }}/>;
  }
}

const mapDispatchToProps = dispatch => ({
  handleSubmit(item) {
    event.preventDefault();
    dispatch(addItem(item));
    dispatch(clearActiveItem());
  },
  handleUpdate(item) {
    event.preventDefault();
    dispatch(updateItem(item));
    console.log('handleUpdate');
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddItem);
