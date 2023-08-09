// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";

import Navbar from "./components/Navbar";

import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <>
      <Navbar title="Gaurav" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm/>
      </div>
    </>
  );
}

export default App;
