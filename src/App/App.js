import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, getNavItems, Header, Home, Navbar } from "../components";
import { getData } from "../components/Home/getData";
import "./App.scss";

function ProjectDetails({ project }) {
  if (!project) return null;
  return (
    <main className="ProjectDetails">
      <section>
        <p>{project.desc}</p>
        <ul>
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{project.learned}</p>
        <p>{project.liked}</p>
        <p>{project.disliked}</p>
        <a href={project.gitDemoLink}>git demo</a>
      </section>
      <section>
        <img alt="mobile" />
        <img alt="desktop" />
      </section>
    </main>
  );
}

function PageMissing() {
  return <div>error 404</div>;
}

const routes = [
  { exact: true, path: "/", component: Home },

  {
    path: "/projectDetails/:uuid",
    render: (routeProps) => {
      let uuid = routeProps.match.params.uuid;
      let projects = getData().projects;
      const project = projects.find((item) => item.uuid === uuid);
      return <ProjectDetails project={project} />;
    },
  },
  { path: "*", component: PageMissing },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar navItems={getNavItems()} />
        <Switch>
          {routes.map((route, idx) => (
            <Route
              exact={route.exact}
              path={route.path}
              component={route.component ? route.component : null}
              render={route.render ? route.render : null}
              key={idx}
            />
          ))}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
