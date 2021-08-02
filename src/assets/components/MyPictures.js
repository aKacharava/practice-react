import React from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";

export default function MyPictures(props) {
  const [modalOpen, setModalOpen] = useState(false);

  function deleteHandler() {
    setModalOpen(true);
  }

  function cancelHandler() {
    setModalOpen(false);
  }

  return (
    <div className="vg-card">
      <h2>{props.text}</h2>
      <div className="vg-actions">
        <button className="vg-btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      { modalOpen && <Modal pressedOnCancel={cancelHandler}/>}
      { modalOpen && <Backdrop pressedOnCancel={cancelHandler}/>}
    </div>
  );
}
