import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Front from "./Front";
import App from "./App";
function Start() {
 

  return (
    <Router>
    
      <div className="App">
      

        <Route exact path="/" children={<Front></Front>} />
        <Route path="/chess" children={<App></App>} />
      </div>
    </Router>
  );
}

export default Start;
