export function ProjectCard({ name, thumb, alt, desc }) {
  return (
    <div className="ProjectCard">
      <h4>{name}</h4>
      <img alt={alt} src={thumb} />
      <p>{desc}</p>
    </div>
  );
}

export default ProjectCard;
