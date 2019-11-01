import { combineReducers } from 'redux';
import items from './itemReducer';
import activeItem from './activeItemReducer';

export default combineReducers({
  items,
  activeItem
});
