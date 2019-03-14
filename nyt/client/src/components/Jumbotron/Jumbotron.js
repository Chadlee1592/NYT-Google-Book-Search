import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 150, clear: "both", paddingTop: 30, textAlign: "center", fontSize: 23 }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;