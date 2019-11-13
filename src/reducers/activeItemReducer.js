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
      console.log('action', action);
      return { ...state, activeItem: action.payload };
    case CLEAR_ACTIVE_ITEM:
      return { activeItem: initialState };
    default:
      return state;
  }
}

// active item reducer
// edit button will store that item in active item reducer 
// from that reducer i have access to the item

// selector: grab active item
// default form set 
