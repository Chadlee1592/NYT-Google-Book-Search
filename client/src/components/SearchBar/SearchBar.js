import React from "react";

function SearchBar({children}) {
  return (
    <div
      style={{ height: 150, clear: "both", paddingTop: 30, textAlign: "center" }}
      className="jumbotron"
    >
    {children}
    </div>
  );
}

export default SearchBar;
