export const getState = ({ contacts }) => ({
  loading: contacts.loading,
  error: contacts.error,
});


export const getFilteredContacts = ({ contacts }) => {
  const {
    items: { items },
    filter,
  } = contacts;

  if (!filter) {
    return items;
  }
  const filteredContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredContacts;
};
