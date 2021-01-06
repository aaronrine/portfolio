import { Link } from "react-router-dom";
export function ProjectCard({ active = false, classes = "", project }) {
  return (
    <div className={`ProjectCard ${active ? "active" : ""} ${classes}`}>
      {active && <h4>{project.name}</h4>}
      <Link to={"/projectDetails/" + project.uuid}>
        <img alt={project.alt} src={project.thumb} />
      </Link>
      {active && <p>{project.desc}</p>}
    </div>
  );
}

export default ProjectCard;
