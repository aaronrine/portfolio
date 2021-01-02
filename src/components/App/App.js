import "./App.scss";
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

function ProjectCard({ name, thumb, alt, desc }) {
  return (
    <div className="ProjectCard">
      <h4>{name}</h4>
      <img alt={alt} src={thumb} />
      <p>{desc}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Portfolio Site</h1>
        <h4>This is my portfolio site</h4>
      </header>
      <nav>
        <a>home</a>
        <a>project 1</a>
        <a>project 2</a>
        <a>project 3</a>
      </nav>
      <main>
        <section className="bio">
          <h3>About Me</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
        <section className="projects">
          <h3>Projects</h3>
          {data.projects.map((project) => (
            <ProjectCard {...project} key={project.name} />
          ))}
        </section>
      </main>
      <footer>Copyright &copy; 2020</footer>
    </div>
  );
}

export default App;
