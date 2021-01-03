import "./App.scss";
import { Footer, getNavItems, Header, Main, Navbar } from "../components";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar navItems={getNavItems()} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
