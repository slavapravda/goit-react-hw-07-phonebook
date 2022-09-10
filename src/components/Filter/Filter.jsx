import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/filter/filterSelectors';
import { setFilter } from 'redux/contacts/filter/filterSlice';

import s from './filter.module.css';

const Filter = () => {
  const filterName = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div>
      <label className={s.form__group}>
        Find contacts by name
        <input
          className={s.input}
          value={filterName}
          type="text"
          name="filter"
          placeholder="..."
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
