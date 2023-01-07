import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  function handleUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
  }
  function handleOnChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="input_text"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
      </div>
      <div className="container mt-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
