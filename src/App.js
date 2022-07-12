// import React, { } from 'react';
// import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = function () {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#080540";
      showAlert("Successfull!", "You Did It Congrats!")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }
  const [alert, setAlert] = useState(null)
  const showAlert = function (type, sms) {
    setAlert({
      type: type,
      sms: sms
    })
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="Text Editions" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact path="/about"> */}
        {/* <About /> */}
        {/* </Route> */}
        {/* <Route exact path="/"> */}
        <Textarea title="Enter Text Area" mode={mode} />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
