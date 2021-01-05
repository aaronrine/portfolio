import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Footer, getNavItems, Header, Main, Navbar } from "../components";
import "./App.scss";

function Carousel() {
  return <div className="Carousel">carousel</div>;
}

function Home() {
  return (
    <main className="Home">
      <section className="bio">
        <div>
          <img alt="A photo of Aaron Rine" />
          <p>short quote</p>
        </div>
        <p>intro w/ skills</p>
        <p>mid w/ passion for web dev</p>
        <p>conclusion w/ ways i add value</p>
      </section>
      <section className="carousel">
        <Carousel />
      </section>
      <section className="contact">
        <p>contact</p>
        <a href="https://github.com/aaronrine/">Github</a>
        <a href="https://www.linkedin.com/in/aaron-rine-1903b511a/">LinkedIn</a>
      </section>
    </main>
  );
}

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
      <aside></aside>
    </main>
  );
}

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/projectdetails", component: ProjectDetails },
  { path: "*", component: Main },
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
