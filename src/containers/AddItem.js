import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ItemForm from '../components/item/ItemForm';
import { addItem } from '../actions/itemActions';
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
  handleUpdate() {
    event.preventDefault();
    dispatch(clearActiveItem());
    console.log('handleUpdate');
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddItem);
