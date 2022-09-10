import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/items/itemsOperations';
import {
  getFilteredContacts,
  getError,
  getLoading,
} from 'redux/contacts/items/itemsSelectors';

import s from './contactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const error = useSelector(getError);
  const loading = useSelector(getLoading);

  const dispatch = useDispatch();

  const onRremoveContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <>
      {error && <p>Error: {error.message}</p>}
      {loading && <h2>Loading....</h2>}
      <ul className={s.contact__list}>
        {!loading &&
          contacts.length > 0 &&
          contacts.map(({ id, name, phone }) => (
            <li key={id} className={s.contact__item}>
              {name} : {phone}
              <button
                className={s.contact__btn}
                key={id}
                onClick={() => onRremoveContact(id)}
                type="button"
              >
                ❌
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
