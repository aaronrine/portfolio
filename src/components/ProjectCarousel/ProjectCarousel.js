import { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectCarousel.scss";
export function ProjectCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  function previous() {
    if (activeIndex == 0) {
      setActiveIndex(projects.length - 1);
    } else {
      setActiveIndex((prev) => prev - 1);
    }
  }
  function next() {
    if (activeIndex == projects.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + 1);
    }
  }

  return (
    <section className="ProjectCarousel">
      <button type="button" onClick={() => previous()}>
        &lt;
      </button>
      <ProjectCard {...project} key={project.name} />
      <button type="button" onClick={() => next()}>
        &gt;
      </button>
    </section>
  );
}

export default ProjectCarousel;
