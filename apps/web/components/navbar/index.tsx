import React from "react";
import {BsCartFill} from "react-icons/bs";
import {FaBars, FaTimes, FaUser} from "react-icons/fa";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [showHoverMenu, setShowHoverMenu] = React.useState(false);

  function toggleNavbarMenu(e: any, val?: boolean) {
    if (val) {
      setShowMenu(val);
    } else {
      setShowMenu((prev) => !prev);
    }
  }

  function toggleHoverMenu(e: any, hover: boolean) {
    if (hover) {
      setShowHoverMenu(true);
    } else {
      setShowHoverMenu(false);
    }
  }

  return (
    <nav className="navbar">
      <a href="/">
        <span className="logo">FS</span>
      </a>
      <div style={{flexGrow: 1}} />
      <ul className={`navbar-menu ${showMenu ? "active" : "inactive"}`}>
        <li className="navbar-menu-item">
          <Link href="/">Home</Link>
        </li>
        <li className="navbar-menu-item">
          <Link href="/about">About</Link>
        </li>
        <li className="navbar-menu-item">
          <div
            className={`hover-menu ${showHoverMenu ? "active" : "inactive"}`}
            onMouseMove={(e) => toggleHoverMenu(e, true)}
            onMouseLeave={(e) => toggleHoverMenu(e, false)}
          >
            <button
              className={`hover-menu-btn ${
                showHoverMenu ? "active" : "inactive"
              }`}
            >
              Categories
            </button>
            <ul
              className={`hover-menu-list ${
                showHoverMenu ? "active" : "inactive"
              }`}
            >
              <li className="hover-menu-item">
                <Link href="/categories/clothes">Clothes</Link>
              </li>
              <li className="hover-menu-item">
                <Link href="/categories/technologies">Technologies</Link>
              </li>
              <li className="hover-menu-item">
                <Link href="/categories/accessories">Accessories</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="navbar-menu-item">
          <div className="user-panel">
            {loggedIn ? (
              <button className="icon-btn--primary">
                <FaUser />
              </button>
            ) : (
              <>
                <Link href="/sign-up" passHref={true}>
                  <button className="btn--secondary">Sign Up</button>
                </Link>
                <Link href="/login" passHref={true}>
                  <button className="btn--primary">Login</button>
                </Link>
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
