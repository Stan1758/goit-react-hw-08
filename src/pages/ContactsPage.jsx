import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../redux/contacts/selectors";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactsList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";

import s from "./PagesStyle.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={s.container} style={{ padding: 20 }}>
      <h1 className={s.title}>Phonebook</h1>

      <ContactForm />
      <SearchBox />

      {isLoading && <p>Loading contacts...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <ContactsList contacts={contacts} />
    </section>
  );
};

export default ContactsPage;
