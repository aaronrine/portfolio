export function Navbar({ navItems }) {
  return (
    <nav className="Navbar">
      {navItems?.map((navItem) => {
        return <NavItem {...navItem} key={navItem.uuid} />;
      })}
    </nav>
  );
}

function NavItem({ name, submenu, uuid }) {
  return (
    <div className="NavItem">
      {name}
      {submenu && <Navbar navItems={submenu} key={uuid} />}
    </div>
  );
}

export default Navbar;
