import { postItem, getItemsApi, patchItem } from '../services/inventoryApi';

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

export const UPDATE_ITEM = 'UPDATE_ITEM';
export const updateItem = (item) => {
  return {
    type: UPDATE_ITEM,
    payload: patchItem(item)
  };
};
