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
              <a href="#projects">
                <button className="btn white-button">Projects</button>
              </a>
              <button className="btn red-button">Contact</button>
            </div>
          </div>
          <div className="section--hero-image-and-socials">
            <div className="section--hero-socials">
              <a href="https://github.com/Sohyb01">
                <div className="socials-button github"></div>
              </a>
              <a href="https://www.linkedin.com/in/sohyb-mansour-b237961ba/">
                <div className="socials-button linkedin"></div>
              </a>
              <a href="https://www.instagram.com/sohyb_imm/">
                <div className="socials-button instagram"></div>
              </a>
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
          <div className="section--projects-projects-container">
            <div className="project-card">
              <div className="project-img"></div>
              <div className="project-card-content">
                <p className="project-description">
                  ipsum dolor sit amet, confiscing alet. ipsum sit amet, alet.
                  Project name lorem ipsum dolor sit amet, confiscing alet.
                  lorem
                </p>
                <button className="btn white-button">
                  View Working Project
                </button>
                <button className="btn black-button">
                  View Code on Github
                </button>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img"></div>
              <div className="project-card-content">
                <p className="project-description">
                  ipsum dolor sit amet, confiscing alet. ipsum sit amet, alet.
                  Project name lorem ipsum dolor sit amet, confiscing alet.
                  lorem
                </p>
                <button className="btn white-button">
                  View Working Project
                </button>
                <button className="btn black-button">
                  View Code on Github
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section--aboutme" id="aboutme">
          <h1 className="bold">
            More <span className="red">About Me</span>
          </h1>
          <p>
            <span className="bold">As a web developer,</span> I specialize in
            transforming designs into custom websites or web applications that
            meet user requirements using the latest technologies and meeting
            industry standards.{" "}
            <span className="bold">
              {" "}
              I bring your ideas to <span className="red">life </span>for the
              world to see!
            </span>
            🥷🌸
          </p>
          <p>
            My most prominent traits are honesty, humility, and always trying to
            improve. Other than coding, I enjoy weightlifting, calisthenics,
            chess, browsing the internet, learning new skills, and spending time
            with friends.
          </p>
          <div className="section--aboutme-img"></div>
        </section>
      </main>
      <section className="section--contact" id="contact">
        <h1>Get in touch with me!</h1>
        <form className="contact-form" method="post">
          <div className="name-input">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="email-input">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="message-input">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button className="btn red-button" type="submit">
            SUBMIT
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
