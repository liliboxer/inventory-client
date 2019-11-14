import { ADD_ACTIVE_ITEM, CLEAR_ACTIVE_ITEM } from '../actions/activeItemActions';

const initialState = {
  activeItem: {
    category: '',
    name: '',
    quantity: 1
  }
};

export default function activeItemReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_ACTIVE_ITEM:
      return { ...state, activeItem: action.payload };
    case CLEAR_ACTIVE_ITEM:
      return { activeItem: initialState };
    default:
      return state;
  }
}
