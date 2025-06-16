import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";

function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.text);

  const filtered = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.wrapper}>
      {filtered.map((contact) => (
        <Contact contact={contact} key={contact.id} className={s.item} />
      ))}
    </ul>
  );
}

export default ContactList;
