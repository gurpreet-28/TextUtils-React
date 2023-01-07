import React from "react";

export default function TextForm(props) {
  return (
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" id="input_text" rows="8"></textarea>
      </div>
    </div>
  );
}
