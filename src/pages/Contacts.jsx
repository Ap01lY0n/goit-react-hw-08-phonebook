import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/contacts/contSelectors';
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/contOperations";
import FormContact from '../components/PhoneBookForm/PhoneBookForm';
import Filter from '../components/Filter/Filter.jsx';
import Section from '../components/Section/Section.jsx';
import ContactList from '../components/ContactList/ContactList';

export default function Tasks() {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);
      return (
        <Section>
          <h2>Phonebook</h2>
          <FormContact/>
          <Filter/>
          {contacts.length !== 0 && <ContactList/>}
        </Section>
          );
  }