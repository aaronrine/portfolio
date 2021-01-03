import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { getData } from "./getData";

export function Main() {
  const [data, setData] = useState({ projects: [] });

  useEffect(() => {
    setData(getData());
  }, []);

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

export default Main;
