import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts } from 'redux/Contacts/contactSelectors';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import ContactFilter from '../../components/ContactFilter/ContactFilter';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/Contacts/contactOperations';
import css from './ContactsView.module.css';

export function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const allContactsSumm = useSelector(selectContacts).length;
  return (
    <main className={css.main}>
      <ContactForm />
      <div className={css.contactsBox}>
        <h2 className={css.label}>Contacts ({allContactsSumm})</h2>
        <ContactFilter />
        <ContactList />
      </div>
    </main>
  );
}
