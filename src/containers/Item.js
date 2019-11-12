import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './Item.css';
import { addActiveItem } from '../actions/activeItemActions';


let url = new URL('http://localhost:7890/?name=&quantity=1'); 
let params = new URLSearchParams(url.search.slice(1)); 

  
class Item extends Component {
  static propTypes = {
    item: PropTypes.shape({ 
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired 
    }).isRequired,
    edit: PropTypes.func.isRequired
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
    console.log(item);
    params.set('name', `${item.name}`);
    params.set('quantity', `${item.quantity}`);
    console.log(params.toString()); 
    dispatch(addActiveItem(item));
  }
});


export default connect(null, mapDispatchToProps)(Item);
