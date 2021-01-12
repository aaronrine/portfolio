import { Link } from "react-router-dom";
import { Navbar, getNavItems } from "../components";

export function Header() {
  return (
    <header className="Header">
      <div className="title">
        <Link to="/" className="Link">
          <h1>Aaron Rine</h1>
        </Link>
      </div>
      <aside className="details">
        <Navbar navItems={getNavItems()} />
      </aside>
    </header>
  );
}

export default Header;
