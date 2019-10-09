import { ADD_ITEM, FETCH_ITEMS } from '../actions/itemActions';

export default function itemReducer(state = [], action) {
  switch(action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case FETCH_ITEMS:
      return [...state, action.payload];
    default:
      return state;
  }
}
