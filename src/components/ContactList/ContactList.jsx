import ContactListItem from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectStatusFilter } from '../../redux/Contacts/contactSelectors';

const ContactList = () => {
  const filter = useSelector(selectStatusFilter);
  const contacts = useSelector(selectContacts);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Number</th>
        <th>Delete</th>
      </tr>
    </thead>
    {visibleContacts.map(({ name, number, id }) => (
      <tbody key={id}>
       <ContactListItem key={name} name={name} number={number} id={id} />
      </tbody>
    ))}
    </table>
  );
};
export default ContactList;


//   <ul className={css.contactList}>
//   {visibleContacts.map(({ name, number, id }) => (
//     <ContactListItem key={name} name={name} number={number} id={id} />
//   ))}
// </ul>