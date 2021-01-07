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
        <a href={project.gitDemoLink}>git demo</a>
      </section>
      <section className="media">
        <img alt="mobile" />
        <img alt="desktop" />
      </section>
    </main>
  );
}

export default ProjectDetails;
