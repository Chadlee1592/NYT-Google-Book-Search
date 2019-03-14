import React from "react";
import "./style.css"

function Results ({ children }) {
  return (
    <div
      className="jumbotron result">
    
    <div style={{textAlign: "left", paddingBottom: 5}}>{children}</div>

    </div>
  );
}

export default Results;
