import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
              Google Books
            </a>

            <div className ="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/search">Search</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/saved">Saved</a>
                </li>
              </ul>
            </div>
        </nav>
    );
}

export default Navbar;

