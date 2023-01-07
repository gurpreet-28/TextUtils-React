import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  function handleUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase", "success");
  }
  function handleLoClick() {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lowercase", "success");
  }
  function handleClClick() {
    let newText = "";
    setText(newText);
    props.showAlert("Input Cleared", "success");
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
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClClick}>
          Clear Text
        </button>
      </div>
      <div className="container mt-3">
        <h2>Your Text Summary</h2>
        <p>
          <strong>{text.split(" ").length}</strong> words and{" "}
          <strong>{text.length} </strong>
          characters
        </p>
        <p>
          <strong>{0.008 * text.split(" ").length}</strong> Minutes Read
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
