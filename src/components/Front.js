import React, { useState } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
function Front() {
 
  return (
    <div>
      <h1> Chess Game </h1>
    
      <Link to="/chess">
        <button> Let's Play </button>
      </Link>
     
    </div>
  );
}
export default Front;
