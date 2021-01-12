import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Header, Home, ProjectDetails } from "../components";
import { getData } from "../components/Home/getData";
import "./App.scss";

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
