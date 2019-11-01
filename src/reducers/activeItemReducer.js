import { ADD_ACTIVE_ITEM } from '../actions/activeItemActions';

const initialState = {
  item: {}
};

export default function activeItemReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_ACTIVE_ITEM:
      return { ...state, item: action.payload };
    default:
      return state;
  }
}

// active item reducer
// edit button will store that item in active item reducer 
// from that reducer i have access to the item

// selector: grab active item
// default form set 
