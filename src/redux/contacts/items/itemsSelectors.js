export const getLoading = ({contacts}) => contacts.items.loading;

export const getError = ({contacts}) => contacts.items.error;

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
