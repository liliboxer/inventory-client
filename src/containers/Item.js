import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './Item.css';

class Item extends Component {
  static propTypes = {
    item: PropTypes.shape({ 
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired 
    }).isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }

  render() {
    const { item, increment, decrement } = this.props;
    return (
      <section className={styles.Item}>
        <div className={styles.itemWrapper}>
          <div className={styles.itemContent}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.category}>{item.category}</p>
          </div>
          <div className={styles.itemQuantity}>
            <button onClick={decrement}>-</button>
            <p className={styles.quantity}>{item.quantity}</p>
            <button onClick={increment}>+</button>
          </div>
          <div>
            <button>Edit</button>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  increment() {
    console.log('increment');
  },
  decrement() {
    console.log('decrement');
  }
});


export default connect(null, mapDispatchToProps)(Item);
