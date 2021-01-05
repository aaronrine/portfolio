import { ProjectCarousel } from "../ProjectCarousel";
import { getData } from "./getData";
import profile from "../../assets/irlProfile-cropped.jpg";
import "./Home.scss";
export function Home() {
  const data = getData();
  return (
    <main className="Home">
      <section className="bio">
        <div>
          <img src={profile} alt="A photo of Aaron Rine" />
          <p>short quote</p>
        </div>
        <p>intro w/ skills</p>
        <p>mid w/ passion for web dev</p>
        <p>conclusion w/ ways i add value</p>
      </section>
      <ProjectCarousel projects={data.projects} />
      <section className="contact">
        <p>contact</p>
        <a href="https://github.com/aaronrine/">Github</a>
        <a href="https://www.linkedin.com/in/aaron-rine-1903b511a/">LinkedIn</a>
      </section>
    </main>
  );
}
export default Home;
