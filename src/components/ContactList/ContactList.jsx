import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/items/itemsOperations';
import {
  getFilteredContacts,

} from 'redux/contacts/items/itemsSelectors';

import s from './contactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onRremoveContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <>
      <ul className={s.contact__list}>
        {contacts.map(({ id, name, phone }) => (
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
