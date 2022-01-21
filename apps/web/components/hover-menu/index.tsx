import React from "react";
import {FaCaretRight} from "react-icons/fa";
import Link from "next/link";

interface Props {
  name: string;
}

export const HoverMenu: React.FC<Props> = ({name}) => {
  const [showMenu, setShowMenu] = React.useState(false);

  function handleMouseMove() {
    if (window.innerWidth < 1000) return;
    setShowMenu(true);
  }

  function handleMouseLeave() {
    if (window.innerWidth < 1000) return;
    setShowMenu(false);
  }

  function toggleHoverMenu() {
    setShowMenu((prev) => !prev);
  }

  return (
    <div
      className="hover-menu"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <button className="hover-menu-btn" onClick={toggleHoverMenu}>
        <span>{name}</span>
        <span
          className={`arrow-icon inactive only-mobile ${
            showMenu ? "rotate" : "normal"
          }`}
        >
          <FaCaretRight />
        </span>
      </button>
      <ul className={`hover-menu-list ${showMenu ? "show" : "hide"}`}>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 1
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 2
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 3
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 4
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 5
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 6
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 7
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 8
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 9
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 11
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 12
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 13
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 14
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 15
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 16
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 17
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 18
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 19
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 20
          </Link>
        </li>
        <li className="hover-menu-list-item">
          <Link href="/" passHref>
            Item 21
          </Link>
        </li>
      </ul>
    </div>
  );
};
