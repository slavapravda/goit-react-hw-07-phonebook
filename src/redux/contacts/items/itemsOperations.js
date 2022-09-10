import { createAsyncThunk } from '@reduxjs/toolkit';
import { createOperation } from 'shared/helpers/helpers';

import * as api from '../../../shared/api/api';

const isDublicate = ({ name }, contacts) => {
  const normalizedName = name.toLowerCase();

  const result = contacts.find(contact => {
    return normalizedName === contact.name.toLowerCase();
  });
  return Boolean(result);
};

export const fetchContacts = createOperation('contacts/fetch', api.getContacts);

export const addContact = createAsyncThunk(
  'contact/add',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await api.addContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (contact, { getState }) => {
      const { contacts } = getState();
      console.log(getState())
      if (isDublicate(contact, contacts.items.items)) {
        alert(`${contact.name} already in contacts`);
        return false;
      }
    },
  }
);

export const removeContact = createOperation(
  'contact/remove',
  api.removeContact
);
