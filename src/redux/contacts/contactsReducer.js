import { combineReducers } from '@reduxjs/toolkit';
import items from './items/itemsReducer';
import filter from './filter/filterReducer';

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;
