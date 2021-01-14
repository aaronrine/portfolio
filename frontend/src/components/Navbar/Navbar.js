import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function Navbar({ navItems, showMenu }) {
  return (
    <nav className="Navbar">
      <div className="navList">
        {showMenu &&
          navItems?.map((navItem) => {
            return <NavItem {...navItem} key={navItem.uuid} />;
          })}
      </div>
    </nav>
  );
}

function NavItem({ name, submenu, uuid, href }) {
  return (
    <div className="NavItem">
      <a href={href}>
        <FontAwesomeIcon icon={name} />
      </a>
      {submenu && <Navbar navItems={submenu} key={uuid} />}
    </div>
  );
}

export default Navbar;
