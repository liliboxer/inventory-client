import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Items from '../components/item/Items';
import { getItemsState } from '../selectors/itemSelectors';
import { fetchItems } from '../actions/itemActions';

class AllItems extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    history: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { items, history } = this.props;
    return <Items items={items} history={history}/>;
  }
}

const mapStateToProps = state => {
  return {
    items: getItemsState(state)
  };
};

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchItems());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllItems);
