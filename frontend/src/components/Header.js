import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar, getNavItems } from "../components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="Header">
      <div className="headerWrapper">
        <button onClick={() => setShowMenu(!showMenu)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Link to="/" className="Link">
          <h1>Aaron Rine</h1>
        </Link>
      </div>
      <Navbar navItems={getNavItems()} showMenu={showMenu} />
    </header>
  );
}

export default Header;
