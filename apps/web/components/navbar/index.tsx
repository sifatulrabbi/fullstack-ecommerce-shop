import React from "react";
import {BsCartFill} from "react-icons/bs";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
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
      <h1 className="logo">FS</h1>
      <div style={{flexGrow: 1}}></div>

      <ul className="navbar-menu">
        <li className="navbar-menu-item">Home</li>

        <li className="navbar-menu-item">About us</li>

        <li className="navbar-menu-item">
          <div className="hover-menu">
            <button className="hover-menu-btn">Clothes</button>
            <ul className="hover-menu-list">
              <li className="hover-menu-list-item">Item 1</li>
              <li className="hover-menu-list-item">Item 2</li>
              <li className="hover-menu-list-item">Item 3</li>
              <li className="hover-menu-list-item">Item 4</li>
            </ul>
          </div>
        </li>

        <li className="navbar-menu-item">
          <div className="hover-menu">
            <button className="hover-menu-btn">Technologies</button>
            <ul className="hover-menu-list">
              <li className="hover-menu-list-item">Item 1</li>
              <li className="hover-menu-list-item">Item 2</li>
              <li className="hover-menu-list-item">Item 3</li>
              <li className="hover-menu-list-item">Item 4</li>
            </ul>
          </div>
        </li>

        <li className="navbar-menu-item">
          <div className="hover-menu">
            <button className="hover-menu-btn">Accessories</button>
            <ul className="hover-menu-list">
              <li className="hover-menu-list-item">Item 1</li>
              <li className="hover-menu-list-item">Item 2</li>
              <li className="hover-menu-list-item">Item 3</li>
              <li className="hover-menu-list-item">Item 4</li>
            </ul>
          </div>
        </li>

        <li className="navbar-menu-item">
          <div className="hover-menu">
            <button className="hover-menu-btn">Beauty</button>
            <ul className="hover-menu-list">
              <li className="hover-menu-list-item">Item 1</li>
              <li className="hover-menu-list-item">Item 2</li>
              <li className="hover-menu-list-item">Item 3</li>
              <li className="hover-menu-list-item">Item 4</li>
            </ul>
          </div>
        </li>
      </ul>
      <button className="icon-btn--secondary">
        <FaSearch />
      </button>
      <button className="icon-btn--secondary">
        <FaShoppingCart />
      </button>
      <button className="icon-btn--secondary only-mobile">
        <FaBars />
      </button>
    </nav>
  );
};
