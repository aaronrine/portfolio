import { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectCarousel.scss";
export function ProjectCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];
  const nextProject = projects[getNextIndex()];
  const prevProject = projects[getPrevIndex()];

  function getPrevIndex() {
    return activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
  }

  function getNextIndex() {
    return activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
  }

  function previous() {
    setActiveIndex(getPrevIndex());
  }
  function next() {
    setActiveIndex(getNextIndex());
  }

  return (
    <section className="ProjectCarousel">
      <button className="prev" type="button" onClick={() => previous()}>
        &lt;
      </button>
      <ProjectCard
        project={prevProject}
        classes="prev"
        key={prevProject.name}
      />
      <ProjectCard project={project} active={true} key={project.name} />
      <ProjectCard
        project={nextProject}
        classes="next"
        key={nextProject.name}
      />
      <button className="next" type="button" onClick={() => next()}>
        &gt;
      </button>
    </section>
  );
}

export default ProjectCarousel;
