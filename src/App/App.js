import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, getNavItems, Header, Home, Navbar } from "../components";

import "./App.scss";

function ProjectDetails() {
  return (
    <main className="ProjectDetails">
      <section>
        <p>problem to solve, approuch to problem, solution</p>
        <ul>
          <li>tech</li>
          <li>stack</li>
        </ul>
        <p>What I learned</p>
        <p>What I liked</p>
        <p>What I disliked</p>
        <a href="https://github.com/aaronrine/todo-list">git demo</a>
      </section>
      <aside>
        <img alt="mobile" />
        <img alt="desktop" />
      </aside>
    </main>
  );
}

function PageMissing() {
  return <div>error 404</div>;
}

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/projectdetails", component: ProjectDetails },
  { path: "*", component: PageMissing },
];
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar navItems={getNavItems()} />
        <Switch>
          {routes.map((route) => (
            <Route exact {...{ ...route }} />
          ))}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
