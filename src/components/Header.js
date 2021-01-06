import { Link } from "react-router-dom";
export function Header() {
  return (
    <header>
      <Link to="/" className="Link">
        <h1>Portfolio Site</h1>
      </Link>
      <h4>This is my portfolio site</h4>
    </header>
  );
}

export default Header;
