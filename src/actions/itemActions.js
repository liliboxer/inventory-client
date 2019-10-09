import { postItem, getItemsApi } from '../services/inventoryApi';

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = item => ({
  type: ADD_ITEM,
  payload: postItem(item)
});

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const fetchItems = () => ({
  type: FETCH_ITEMS,
  payload: getItemsApi()
});
