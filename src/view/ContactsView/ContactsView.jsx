import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  // selectError,
  // selectIsLoading,
  selectContacts,
} from 'redux/Contacts/contactSelectors';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import ContactFilter from '../../components/ContactFilter/ContactFilter';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/Contacts/contactOperations';
import  css  from './ContactsView.module.css';

export function ContactsView() {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const allContactsSumm = useSelector(selectContacts).length;
  return (
    <body className={css.body}>
         <ContactForm />
      <div>
        <h2>Contacts ({allContactsSumm})</h2>
        <ContactFilter />
        {/* {isLoading && !error && <b>Request in progress...</b>} */}
        <ContactList />
      </div>
   
    </body>
   
  );
}
