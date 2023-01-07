import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Navbar title="TextUtils" />
      <Alert alert={alert} />
      <div className="container mt-3">
        <TextForm heading="Enter the text to analyze" showAlert={showAlert} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
