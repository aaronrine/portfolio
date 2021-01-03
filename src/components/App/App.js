import "./App.scss";
import uuid from "react-uuid";
import todoAppScreenshot from "../../assets/todo-app-thumb.png";

const data = {
  projects: [
    {
      name: "Todo-App",
      thumb: todoAppScreenshot,
      alt: "Todo app screenshot",
      desc: "List and track the status of your tasks.",
    },
    {
      name: "Todo-App2",
      thumb: todoAppScreenshot,
      alt: "Todo app screenshot",
      desc: "List and track the status of your tasks.",
    },
    {
      name: "Todo-App3",
      thumb: todoAppScreenshot,
      alt: "Todo app screenshot",
      desc: "List and track the status of your tasks.",
    },
    {
      name: "Todo-App4",
      thumb: todoAppScreenshot,
      alt: "Todo app screenshot",
      desc: "List and track the status of your tasks.",
    },
  ],
};

const navItems = [
  {
    name: "Home",
    submenu: [
      {
        name: "About Me",
        href: "#",
        submenu: [
          {
            name: "Home1",
            submenu: [
              {
                name: "About Me2",
                href: "#",
              },
              {
                name: "Projects3",
                href: "#",
              },
            ],
          },
          {
            name: "To-Do App4",
            submenu: [
              {
                name: "About Me5",
                href: "#",
              },
              {
                name: "Projects6",
                href: "#",
              },
            ],
          },
          {
            name: "E-commerce Site7",
            submenu: [
              {
                name: "About Me8",
                href: "#",
              },
              {
                name: "Projects9",
                href: "#",
              },
            ],
          },
        ],
      },
      {
        name: "Projects10",
        href: "#",
      },
    ],
  },
  {
    name: "To-Do App11",
    submenu: [
      {
        name: "About Me12",
        href: "#",
      },
      {
        name: "Projects13",
        href: "#",
      },
    ],
  },
  {
    name: "E-commerce Site14",
    submenu: [
      {
        name: "About Me15",
        href: "#",
      },
      {
        name: "Projects16",
        href: "#",
      },
    ],
  },
];

function ProjectCard({ name, thumb, alt, desc }) {
  return (
    <div className="ProjectCard">
      <h4>{name}</h4>
      <img alt={alt} src={thumb} />
      <p>{desc}</p>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Portfolio Site</h1>
      <h4>This is my portfolio site</h4>
    </header>
  );
}

function Navbar({ navItems }) {
  return (
    <nav className="Navbar">
      {navItems?.map((navItem) => (
        <NavItem navItem={navItem} key={uuid()} />
      ))}
    </nav>
  );
}

function NavItem({ navItem }) {
  return (
    <div className="NavItem">
      <div>
        {navItem.name}
        {navItem?.submenu?.map((submenuItem) => {
          return <Navbar navItems={submenuItem.submenu} key={uuid()} />;
        })}
      </div>
    </div>
  );
}

function Main() {
  return (
    <main>
      <section className="bio">
        <h3>About Me</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
      <section className="projects">
        <h3>Projects</h3>
        {data.projects.map((project) => (
          <ProjectCard {...project} key={project.name} />
        ))}
      </section>
    </main>
  );
}

function Footer() {
  return <footer>Copyright &copy; 2020</footer>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar navItems={navItems} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
