import { useDispatch, useSelector } from 'react-redux';
import { selectStatusFilter } from '../../redux/Contacts/contactSelectors';
import { setFilter } from '../../redux/Filter/filterSlice';

const ContactFilter = () => {
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const onChangeFilter = evt => {
    const searchContact = evt.target.value;
    // console.log(searchContact);
    dispatch(setFilter(searchContact.toLowerCase()));
  };

  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onChangeFilter} />
    </label>
  );
};

export default ContactFilter;
