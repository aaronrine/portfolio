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
      classes="MediaCarousel"
      ItemCard={MediaCard}
      itemProps={{
        previous: { classes: "prev" },
        current: { active: true },
        next: { classes: "next" },
      }}
    />
  );
}

export function ProjectDetails({ project }) {
  if (!project) return null;
  return (
    <main className="ProjectDetails">
      <h2 className="title">{project.name}</h2>

      <p className="desc">{project.desc}</p>
      <ul className="techDetails">
        {project.tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <section className="personalDetails">
        <p>{project.learned}</p>
        <p>{project.liked}</p>
        <p>{project.disliked}</p>
        <a href={project.gitDemoLink}>See it live here</a>
      </section>
      <MediaCarousel media={project.images} />
    </main>
  );
}

export default ProjectDetails;
