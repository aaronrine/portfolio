import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="Header">
      <div className="title">
        <Link to="/" className="Link">
          <h1>Portfolio Site</h1>
        </Link>
        <h4>This is my portfolio site</h4>
      </div>
      <aside className="details">
        <p>Aaron rine</p>
        <a href="https://www.linkedin.com/in/aaron-rine-1903b511a/">
          Follow me on LinkedIn to see my latest progress
        </a>
        <a href="https://github.com/aaronrine">Check out my Github</a>
      </aside>
    </header>
  );
}

export default Header;
