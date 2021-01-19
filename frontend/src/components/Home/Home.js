import { ProjectCarousel } from "../ProjectCarousel";
import { getData } from "./getData";
import profile from "../../assets/irlProfile-cropped.jpg";
import "./Home.scss";
export function Home() {
  const data = getData();
  return (
    <main className="Home">
      <section className="bio">
        <article className="bioCard">
          <img src={profile} alt="Aaron Rine" />
          <p>
            Websites hold a tremendous amount of power and it is my ambition to
            join the larger community of web developers in helping to give this
            power to companies and individuals. Much of my ability to provide
            comes from being a quick learner, as most coding obstacles are
            challenges we haven't yet seen. Coupled with experience working on
            e-commerce sites and over a year of intensive learning, I am
            confident that I can find the solutions your company needs to go to
            the next level.
          </p>
        </article>
        <article className="bioText">
          <p>
            Most of my experience lies in front-end development. Having an
            advanced grasp of HTML5, JavaScript, CSS and others allowed me to
            seamlessly move between vanilla JS toy problems and business level
            framework issues such as e-commerce with react or using third party
            API's.
          </p>
          <p>
            Rome wasn't built in a day and it certainly wasn't built by one
            person. While most of my work is my own, I am no stranger to working
            with friends and colleagues on coding projects and sharing repos.
          </p>
        </article>
      </section>
      <section className="projects">
        <h3>Projects</h3>
        <ProjectCarousel projects={data.projects} />
      </section>
    </main>
  );
}
export default Home;
