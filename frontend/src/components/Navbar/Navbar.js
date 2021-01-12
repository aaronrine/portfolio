import "./Navbar.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Navbar({ navItems }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="Navbar">
      <button onClick={() => setShowMenu(!showMenu)}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      {showMenu &&
        navItems?.map((navItem) => {
          return <NavItem {...navItem} key={navItem.uuid} />;
        })}
    </nav>
  );
}

function NavItem({ name, submenu, uuid, href }) {
  return (
    <div className="NavItem">
      <a href={href}>{name}</a>
      {submenu && <Navbar navItems={submenu} key={uuid} />}
    </div>
  );
}

export default Navbar;
