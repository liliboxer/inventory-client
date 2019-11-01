export const ADD_ACTIVE_ITEM = 'ADD_ACTIVE_ITEM';
export const addActiveItem = item => {
  console.log('add active item');
  return {
    type: ADD_ACTIVE_ITEM,
    payload: item
  };
};

export const CLEAR_ACTIVE_ITEM = 'CLEAR_ACTIVE_ITEM';
export const clearActiveItem = () => {
  console.log('clear active item');
  return {
    type: CLEAR_ACTIVE_ITEM
  };
};
