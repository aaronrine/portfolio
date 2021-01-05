import "./Navbar.scss";
export function Navbar({ navItems }) {
  return (
    <nav className="Navbar">
      {navItems?.map((navItem) => {
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
