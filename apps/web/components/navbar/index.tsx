import React from "react";
import {BsCartFill} from "react-icons/bs";
import {FaBars, FaTimes, FaUser} from "react-icons/fa";

export const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(true);
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const toggleNavbarMenu = (e: any, val?: boolean): void => {
    if (val) {
      setShowMenu(val);
    } else {
      setShowMenu((prev) => !prev);
    }
  };

  return (
    <nav className="navbar">
      <a href="/">
        <span className="logo">FS</span>
      </a>
      <div style={{flexGrow: 1}} />
      <ul className={`navbar-menu ${showMenu ? "active" : "inactive"}`}>
        <li className="navbar-menu-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-menu-item">
          <a href="/">Categories</a>
        </li>
        <li className="navbar-menu-item">
          <a href="/">Tech</a>
        </li>
        <li className="navbar-menu-item">
          <a href="/">Accessories</a>
        </li>
        <li className="navbar-menu-item">
          <a href="/">About</a>
        </li>
        <li className="navbar-menu-item">
          <div className="user-panel">
            {loggedIn ? (
              <button className="icon-btn--primary">
                <FaUser />
              </button>
            ) : (
              <>
                <button className="btn--secondary">Sign Up</button>
                <button className="btn--primary">Login</button>
              </>
            )}
          </div>
        </li>
      </ul>
      <button
        id="menu-toggle-btn"
        className="icon-btn--secondary"
        onClick={toggleNavbarMenu}
      >
        {showMenu ? <FaTimes /> : <FaBars />}
      </button>
      <button className="icon-btn--primary">
        <BsCartFill />
      </button>
    </nav>
  );
};
