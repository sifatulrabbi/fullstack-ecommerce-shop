import React from "react";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
import {HoverMenu} from "../hover-menu";

export const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  function toggleNavbarMenu(e: any, val?: boolean) {
    if (val) {
      setShowMenu(val);
    } else {
      setShowMenu((prev) => !prev);
    }
  }

  return (
    <nav className="navbar">
      <Link href="/" passHref>
        <h1 className="logo">FS</h1>
      </Link>
      <div style={{flexGrow: 1}}></div>

      <ul className={`navbar-menu ${showMenu ? "show" : "hide"}`}>
        <li className="navbar-menu-item">
          <Link href="/">Home</Link>
        </li>

        <li className="navbar-menu-item">
          <Link href="/" passHref>
            About
          </Link>
        </li>

        <li className="navbar-menu-item">
          <HoverMenu name="Clothes" />
        </li>

        <li className="navbar-menu-item">
          <HoverMenu name="Beauty" />
        </li>

        <li className="navbar-menu-item">
          <HoverMenu name="Technologies" />
        </li>

        <li className="navbar-menu-item">
          <HoverMenu name="Accessories" />
        </li>
      </ul>
      <button className="icon-btn--secondary">
        <FaSearch />
      </button>
      <button className="icon-btn--secondary">
        <FaShoppingCart />
      </button>
      <button
        className="icon-btn--secondary only-mobile"
        onClick={toggleNavbarMenu}
      >
        {showMenu ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};
