export const ADD_ACTIVE_ITEM = 'ADD_ACTIVE_ITEM';
export const addActiveItem = item => {
  console.log('add active item');
  return {
    type: ADD_ACTIVE_ITEM,
    payload: item
  };
};
