import { Link } from "react-router-dom";
export function ProjectCard({ active = false, classes = "", item }) {
  console.log(item);
  return (
    <div className={`ProjectCard ${active ? "active" : ""} ${classes}`}>
      {active && <h4>{item.name}</h4>}
      <Link to={"/projectDetails/" + item.uuid}>
        <img alt={item.alt} src={item.thumb} />
      </Link>
      {active && <p>{item.shortDesc}</p>}
    </div>
  );
}

export default ProjectCard;
