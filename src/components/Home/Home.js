import { ProjectCarousel } from "../ProjectCarousel";
import { getData } from "./getData";
import profile from "../../assets/irlProfile-cropped.jpg";
import "./Home.scss";
export function Home() {
  const data = getData();
  return (
    <main className="Home">
      <section className="bio">
        <div className="bioCard">
          <img src={profile} alt="A photo of Aaron Rine" />
          <p>
            Websites hold a tremoundous amount of power and it is my ambition to
            join the larger community of web developers in helping to give this
            power to companies and individuals. Much of my ability to provide
            comes from being a quick learner, as most coding obstacles are
            challenges we haven't yet seen. Coupled with experience working on
            e-commerce sites and over a year of intensive learning, I am
            confident that I can find the solutions your company needs to go to
            the next level.
          </p>
        </div>
        <div className="bioText">
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
        </div>
      </section>
      <ProjectCarousel projects={data.projects} />
      <section className="contact">
        <a href="https://github.com/aaronrine/">Github</a>
        <a href="https://www.linkedin.com/in/aaron-rine-1903b511a/">LinkedIn</a>
      </section>
    </main>
  );
}
export default Home;
