import React from "react";
import s from "./Contact.module.css";
import { RiContactsLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsSlice";

function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <span className={s.name}>
          <RiContactsLine className={s.icon} />
          {contact.name}
        </span>
        <span className={s.number}>
          <BsTelephone className={s.icon} />
          {contact.number}
        </span>
      </div>
      <button
        type="button"
        className={s.deleteButton}
        onClick={() => {
          dispatch(deleteContacts(contact.id));
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
