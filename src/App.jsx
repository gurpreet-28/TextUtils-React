import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container mt-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
