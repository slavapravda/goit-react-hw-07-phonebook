import { combineReducers } from '@reduxjs/toolkit';
import items from './items/itemsSlice';
import filter from './filter/filterReducer';

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;
