import ProjectCard from "./ProjectCard";
import { Carousel } from "../Carousel/Carousel";
import "./ProjectCarousel.scss";

export function ProjectCarousel({ projects }) {
  return (
    <Carousel
      items={projects}
      carouselClasses="ProjectCarousel"
      ItemCard={ProjectCard}
    />
  );
}

export default ProjectCarousel;
