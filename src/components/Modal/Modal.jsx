import React from "react";
import styles from "./Modal.module.css";

const Modal = ({
  contactName,
  isChuckNorris,
  deleteClicks,
  onConfirm,
  onCancel,
  onChuckClick,
}) => {
  const scale = Math.max(1 - deleteClicks * 0.04, 0.3);

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        {isChuckNorris ? (
          <>
            <p>Alright, you decided that yourself.</p>
            <p>
              Click <strong>{100 - deleteClicks}</strong> items to delete
              contact.
            </p>
            <div className={styles.buttons}>
              <button
                className={styles.button}
                onClick={onChuckClick}
                style={{
                  transform: `scale(${scale})`,
                  transition: "transform 0.2s ease",
                }}
              >
                Yes
              </button>
              <button className={styles.button} onClick={onCancel}>
                No
              </button>
            </div>
          </>
        ) : (
          <>
            <p>Are you sure to delete "{contactName}"?</p>
            <div className={styles.buttons}>
              <button className={styles.button} onClick={onConfirm}>
                Yes
              </button>
              <button className={styles.button} onClick={onCancel}>
                No
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
