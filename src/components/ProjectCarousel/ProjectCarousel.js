import ProjectCard from "./ProjectCard";
import { Carousel } from "../Carousel/Carousel";
import "./ProjectCarousel.scss";

export function ProjectCarousel({ projects }) {
  return (
      <Carousel 
        items={projects} 
        classes="ProjectCarousel" 
        ItemCard={ProjectCard}
        itemProps = {{
          previous: {classes: "prev"},
          current: {active: true},
          next: {classes: "next"}
        }}
      />
  );
}

export default ProjectCarousel;
