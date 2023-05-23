import React from "react";

function App() {
  return (
    <div className="App">
      <main className="container-all">
        <section className="section--navigation">
          <div className="nav-logo"></div>
          <div className="nav-list"></div>
          <div className="nav-menu-icon"></div>
        </section>
        <section className="section--hero">
          <div className="section--hero-content">
            <h1 className="bold">
              Hello! My name is Sohyb, I am a
              <span className="red"> Front-End Developer </span>based in
              Alexandria, Egypt.
            </h1>
          </div>
        </section>

        <section className="section--skills">
          <h1 className="bold">
            Relevant <span className="red">Skills & Technologies</span>
          </h1>
        </section>

        <section className="section--projects">
          <h1 className="bold">
            <span className="red">Projects</span> by me
          </h1>
        </section>

        <section className="section--aboutme">
          <h1 className="bold">
            More <span className="red">About Me</span>
          </h1>
        </section>
      </main>
    </div>
  );
}

export default App;
