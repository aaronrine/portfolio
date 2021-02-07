import { Carousel } from "..";
import "./ProjectDetails.scss";
function MediaCard({ item, active = false, classes = "" }) {
  return (
    <div className={`MediaCard ${active ? "active" : ""} ${classes}`}>
      <img alt={item.alt} src={item.source} key={item.alt} />
    </div>
  );
}

function MediaCarousel({ media }) {
  return (
    <Carousel
      items={media}
      carouselClasses="MediaCarousel"
      ItemCard={MediaCard}
    />
  );
}

export function ProjectDetails({ project }) {
  if (!project) return null;
  while (project.tech.length % 4 !== 0) {
    project.tech.push("");
  }

  return (
    <main className="ProjectDetails">
      <h2 className="title">{project.name}</h2>
      <section className="primaryDetails">
        <h4>What is this project?</h4>
        <p className="desc">{project.desc}</p>
        <ul className="techDetails">
          {project.tech.map((item, idx) => (
            <div>
              <li key={item !== "" ? item : idx}>{item}</li>
            </div>
          ))}
        </ul>
      </section>
      <MediaCarousel media={project.images} />
      <section className="personalDetails">
        <h4>What's something you learned while coding this?</h4>
        <p>{project.learned}</p>
        <h4>What did you enjoy making this project?</h4>
        <p>{project.liked}</p>
        <h4>What did you dislike?</h4>
        <p>{project.disliked}</p>
        <a href={project.gitDemoLink}>See it live here</a>
      </section>
    </main>
  );
}

export default ProjectDetails;
