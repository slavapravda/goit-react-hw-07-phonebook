export const getContacts = ({ contacts }) => contacts.items;

export const getFilteredContacts = ({ contacts }) => {
  const { items, filter } = contacts;

  if (!filter) {
    return items;
  }
  const filteredContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredContacts;
};
