import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import Items from '../components/item/Items';
import { getItemsState } from '../selectors/itemSelectors';
import { fetchItems } from '../actions/itemActions';

class AllItems extends Component {
  static propTypes = {
    state: PropTypes.shape({
      items: PropTypes.array
    }),
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return 'HI';
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {  items: getItemsState(state) };
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
