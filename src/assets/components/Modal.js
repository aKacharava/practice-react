import React from "react";

export default function Modal(props) {
  return (
    <div className="vg-modal">
      <p>Are you sure?</p>
      <button className="vg-btn vg-btn--alt" onClick={props.pressedOnCancel}>Cancel</button>
      <button className="vg-btn" onClick={props.pressedOnConfirm}>Confirm</button>
    </div>
  );
}
