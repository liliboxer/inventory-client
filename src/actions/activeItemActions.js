export const ADD_ACTIVE_ITEM = 'ADD_ACTIVE_ITEM';
export const addActiveItem = item => {
  return {
    type: ADD_ACTIVE_ITEM,
    payload: item
  };
};

export const CLEAR_ACTIVE_ITEM = 'CLEAR_ACTIVE_ITEM';
export const clearActiveItem = () => {
  return {
    type: CLEAR_ACTIVE_ITEM
  };
};
