import { ADD_ITEM, FETCH_ITEMS, UPDATE_ITEM } from '../actions/itemActions';

const initialState = {
  items: []
};

export default function itemReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case FETCH_ITEMS:
      return { ...state, items: action.payload };
    case UPDATE_ITEM:
      console.log('action.payload', action.payload);
      return { ...state, items: [...state.items.filter(item => item._id !== action.payload._id), Object.assign({}, action.payload)] };
    default:
      return state;
  }
}
