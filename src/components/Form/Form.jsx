import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  fetchContacts,
  addContact,
} from 'redux/contacts/items/itemsOperations';

import s from './form.module.css';

const Form = () => {
  const [state, setState] = useState({
    name: '',
    phone: '',
  });

  const { name, phone } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(addContact(state));

    setState({
      name: '',
      phone: '',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={s.form__group}>
          <label className={s.form__label}>Name</label>
          <input
            placeholder="Vasilii Petrovich"
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </div>
        <div className={s.form__group}>
          <label className={s.form__label}>Number</label>
          <input
            placeholder="+380...."
            value={phone}
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </div>
        <button className={s.form__btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
export default Form;
