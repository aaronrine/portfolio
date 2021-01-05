import ProjectCarousel from "./ProjectCarousel";

export function ProjectCard({ active = false, classes = "", project }) {
  const { name, thumb, alt, desc } = project;
  return (
    <div className={`ProjectCard ${active ? "active" : ""} ${classes}`}>
      {active && <h4>{name}</h4>}
      <img alt={alt} src={thumb} />
      {active && <p>{desc}</p>}
    </div>
  );
}

export default ProjectCard;
