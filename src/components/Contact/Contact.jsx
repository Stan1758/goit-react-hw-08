import React from "react";
import s from "./Contact.module.css";
import { RiContactsLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ contact }) {
  const dispatch = useDispatch();
  const isChuckNorris = contact.name.trim().toLowerCase() === "chuck norris";

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
          if (!isChuckNorris) {
            dispatch(deleteContact(contact.id));
          }
        }}
        disabled={isChuckNorris}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
