import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './Item.css';
import { addActiveItem } from '../actions/activeItemActions';

class Item extends Component {
  static propTypes = {
    item: PropTypes.shape({ 
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired 
    }).isRequired,
    edit: PropTypes.func.isRequired,
  };

  render() {
    const { item, edit } = this.props;

    return (
      <section className={styles.Item}>
        <div className={styles.itemWrapper}>
          <div className={styles.itemContent}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.category}>{item.category}</p>
          </div>
          <div className={styles.itemQuantity}>
            {/* <button onClick={decrement}>-</button> */}
            <p className={styles.quantity}>{item.quantity}</p>
            {/* <button onClick={increment}>+</button> */}
          </div>
          <div>
            <button onClick={() => edit(item)}>Edit</button>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  edit(item) {
    dispatch(addActiveItem(item));
  }
});


export default connect(null, mapDispatchToProps)(Item);

//  
