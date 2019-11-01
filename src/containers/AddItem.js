import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ItemForm from '../components/item/ItemForm';
import { addItem } from '../actions/itemActions';
import { clearActiveItem } from '../actions/activeItemActions';

class AddItem extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const { handleSubmit } = this.props;
    return <ItemForm actions={{ handleSubmit }}/>;
  }
}

const mapDispatchToProps = dispatch => ({
  handleSubmit(item) {
    event.preventDefault();
    dispatch(addItem(item));
    dispatch(clearActiveItem());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddItem);
