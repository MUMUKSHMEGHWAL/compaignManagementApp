import { DELETE_ITEM } from './constants';

export const deleteItemAction = payload => ({
  type: DELETE_ITEM,
  payload,
})
