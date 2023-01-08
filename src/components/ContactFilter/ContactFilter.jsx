import { useDispatch, useSelector } from 'react-redux';
import { selectStatusFilter } from '../../redux/Contacts/contactSelectors';
import { setFilter } from '../../redux/Filter/filterSlice';

import css from './ContactFilter.module.css'
const ContactFilter = () => {
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const onChangeFilter = evt => {
    const searchContact = evt.target.value;
    // console.log(searchContact);
    dispatch(setFilter(searchContact.toLowerCase()));
  };

  return (
    <label className={css.label}>
      <input className={css.input}
        type="text"
        placeholder="Find contacts by name"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default ContactFilter;
