import { postItem } from '../services/inventoryApi';

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = item => ({
  type: ADD_ITEM,
  payload: postItem(item)
});
