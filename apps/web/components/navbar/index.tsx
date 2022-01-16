import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">FS</h1>
      <div className="navbar-menu">
        <ul className="navbar-links">
          <li className="navbar-links-item">Home</li>
          <li className="navbar-links-item">Home</li>
          <li className="navbar-links-item">Home</li>
          <li className="navbar-links-item">
            <button className="btn--primary">Login</button>
          </li>
          <li className="navbar-links-item">
            <button className="btn--secondary">Sign Up</button>
          </li>
          <li className="navbar-links-item">
            <button className="icon-btn--primary">C</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
