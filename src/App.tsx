import React from "react";

function App() {
  return (
    <div className="App">
      <main className="container-all">
        <section className="section--navigation">
          <a href="#hero" className="nav-logo">
            {" "}
          </a>
          <div className="nav-list">
            <a href="#skills" className="nav-link bold">
              Skills
            </a>
            <a href="#projects" className="nav-link bold">
              Projects
            </a>
            <a href="#aboutme" className="nav-link bold">
              About me
            </a>
            <a href="#contact" className="nav-link contact bold">
              Contact Me
            </a>
          </div>
          <div className="nav-menu-icon"></div>
        </section>

        <section className="section--hero" id="hero">
          <div className="section--hero-content">
            <p className="bold">
              <span className="red">Welcome! </span> My name is Sohyb Mansour,
              and I'm a passionate{" "}
              <span className="red">Front-End Developer </span> who is always
              looking to learn and improve
            </p>
            <div className="section--hero-buttons">
              <button className="btn white-button">Projects</button>
              <button className="btn red-button">Contact</button>
            </div>
          </div>
          <div className="section--hero-image-and-socials">
            <div className="section--hero-socials">
              <div className="socials-button github"></div>
              <div className="socials-button linkedin"></div>
              <div className="socials-button instagram"></div>
            </div>
            <div className="section--hero-image"></div>
          </div>
        </section>

        <section className="section--skills" id="skills">
          <h1 className="bold">
            Relevant <span className="red">Skills & Technologies</span>
          </h1>
          <div className="section--skills-skills-container">
            <div className="skill">
              <div className="skill-icon html"></div>
              <div className="skill-name">HTML</div>
            </div>
            <div className="skill">
              <div className="skill-icon css"></div>
              <div className="skill-name">CSS</div>
            </div>
            <div className="skill">
              <div className="skill-icon javascript"></div>
              <div className="skill-name">Javascript</div>
            </div>
            <div className="skill">
              <div className="skill-icon react"></div>
              <div className="skill-name">ReactJS</div>
            </div>
            <div className="skill">
              <div className="skill-icon typescript"></div>
              <div className="skill-name">Typescript</div>
            </div>
            <div className="skill">
              <div className="skill-icon git-github"></div>
              <div className="skill-name">Git & Github</div>
            </div>
          </div>
        </section>

        <section className="section--projects" id="projects">
          <h1 className="bold">
            <span className="red">Projects</span> by me
          </h1>
        </section>

        <section className="section--aboutme" id="aboutme">
          <h1 className="bold">
            More <span className="red">About Me</span>
          </h1>
        </section>
      </main>
    </div>
  );
}

export default App;
