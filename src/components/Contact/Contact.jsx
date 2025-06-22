import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import s from "./Contact.module.css";
import { RiContactsLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import Modal from "../Modal/Modal";

function Contact({ contact }) {
  const dispatch = useDispatch();
  const isChuckNorris = contact.name.trim().toLowerCase() === "chuck norris";

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(contact.name);
  const [editedNumber, setEditedNumber] = useState(contact.number);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteClicks, setDeleteClicks] = useState(0);

  const nameInputRef = useRef(null);

  useEffect(() => {
    if (isEditing && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [isEditing]);

  const handleDelete = () => {
    setDeleteClicks(0);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.success(`Contact "${contact.name}" deleted.`);
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  const handleChuckDeleteClick = () => {
    const nextCount = deleteClicks + 1;
    if (nextCount >= 100) {
      confirmDelete();
    } else {
      setDeleteClicks(nextCount);
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    if (editedName !== contact.name || editedNumber !== contact.number) {
      dispatch(
        updateContact({
          id: contact.id,
          updatedData: { name: editedName, number: editedNumber },
        })
      )
        .unwrap()
        .then(() => {
          toast.success(`Contact "${editedName}" updated.`);
          setIsEditing(false);
        })
        .catch(() => {
          toast.error("Failed to update contact.");
        });
    } else {
      setIsEditing(false);
    }
  };

  return (
    <>
      <li className={s.item}>
        {isEditing ? (
          <form className={s.form} onSubmit={handleEditSubmit}>
            <div className={s.infoWrapper}>
              <input
                ref={nameInputRef}
                className={s.editInput}
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                required
                minLength={3}
                maxLength={50}
                aria-label="Name"
              />
              <input
                className={s.editInput}
                type="text"
                value={editedNumber}
                onChange={(e) => setEditedNumber(e.target.value)}
                pattern="\d{3}-\d{2}-\d{2}"
                title="Format: 123-45-67"
                required
                aria-label="Number"
              />
            </div>

            <div className={s.buttonsWrapper}>
              <button type="submit" className={s.editButton}>
                Save
              </button>
              <button
                type="button"
                className={s.deleteButton}
                onClick={() => {
                  setIsEditing(false);
                  setEditedName(contact.name);
                  setEditedNumber(contact.number);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className={s.infoWrapper}>
              <span className={s.name}>
                <RiContactsLine className={s.icon} />
                {contact.name}
              </span>
              <span className={s.number}>
                <BsTelephone className={s.icon} />
                {contact.number}
              </span>
            </div>

            <div className={s.buttonsWrapper}>
              <button
                type="button"
                className={`${s.deleteButton} ${s.editButton}`}
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>

              <button
                type="button"
                className={s.deleteButton}
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </li>

      {isModalOpen && (
        <Modal
          contactName={contact.name}
          isChuckNorris={isChuckNorris}
          deleteClicks={deleteClicks}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
          onChuckClick={handleChuckDeleteClick}
        />
      )}
    </>
  );
}

export default Contact;
