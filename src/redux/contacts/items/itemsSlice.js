import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './itemsOperations';

import { pendingCallback, rejectedCallback } from 'shared/helpers/helpers';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: pendingCallback,

    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },

    [fetchContacts.rejected]: rejectedCallback,

    [addContact.pending]: pendingCallback,
    [addContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },

    [addContact.rejected]: rejectedCallback,

    [removeContact.pending]: pendingCallback,

    [removeContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(({ id }) => id !== payload.id);
    },

    [removeContact.rejected]: rejectedCallback,
  },
});

export default itemsSlice.reducer;
