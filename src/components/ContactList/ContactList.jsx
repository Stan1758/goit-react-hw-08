import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return <p className={s.statusLoading}>Loading...</p>;
  }

  if (error) {
    return <p className={s.statusError}>Error: {error}</p>;
  }

  if (contacts.length === 0) {
    return <p className={s.statusNotFound}>Contacts not found.</p>;
  }

  return (
    <ul className={s.wrapper}>
      {contacts.map((contact) => (
        <Contact contact={contact} key={contact.id} className={s.item} />
      ))}
    </ul>
  );
}

export default ContactList;
