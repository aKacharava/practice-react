import React from "react";

export default function MyPictures(props) {

  function deleteHandler() {
    
  }

  return (
    <div className="vg-card">
      <h2>{props.text}</h2>
      <div className="vg-actions">
        <button className="vg-btn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}
