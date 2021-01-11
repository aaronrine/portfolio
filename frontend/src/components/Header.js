import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="Header">
      <div className="title">
        <Link to="/" className="Link">
          <h1>Aaron Rine</h1>
        </Link>
        <h4>Helping to improve business web assets 1 step at a time.</h4>
      </div>
      <aside className="details">
        <a href="https://github.com/aaronrine">Check out my Github</a>
        <a href="https://www.linkedin.com/in/aaron-rine-1903b511a/">
          Follow me on LinkedIn to see my latest progress
        </a>
      </aside>
    </header>
  );
}

export default Header;
