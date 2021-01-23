import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar, getNavItems } from "../components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header({ toggleShowMenu }) {
  return (
    <header className="Header">
      <div className="headerWrapper">
        <button onClick={toggleShowMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Link to="/" className="Link">
          <h1>Aaron Rine</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
