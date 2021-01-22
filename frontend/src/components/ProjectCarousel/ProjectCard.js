//the key in uuid is important. it lets react know that these are new dom elements and makes a new element to assign a new animation for
import { Link } from "react-router-dom";
import uuid from "react-uuid";
export function ProjectCard({
  active = false,
  classes = "",
  item,
  dataLeftAnimate,
  dataRightAnimate,
}) {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      key={uuid()}
      className={`ProjectCard ${active ? "active" : ""} ${classes}`}
      data-leftanimate={dataLeftAnimate}
      data-rightanimate={dataRightAnimate}
    >
      {active && <h4>{item.name}</h4>}
      <Link to={"/projectDetails/" + item.uuid}>
        <img alt={item.alt} src={item.thumb} onClick={scrollToTop} />
      </Link>
      {active && <p>{item.shortDesc}</p>}
    </div>
  );
}

export default ProjectCard;
