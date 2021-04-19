import React from "react";
import "./About.scss";

const AboutMe = () => {
  return (
    <main className="about-section" id="about">
      <nav>
        <h1>About</h1>
      </nav>
      <div className="container">
        <div className="col">
          <article>
            <p>
              I'm Mikołaj, committed and hardworking Frontend Developer I live in
              Warsaw near Szczesliwicki Park.
            </p>
            <p>
              I studied at the Electronic and Telecommunication faculty at the
              Warsaw University of Technology.
            </p>
            <p>
              I am very ambitious and I always try to create something better. When I am a part of the team I feel
              alive. I am very loyal, but I hate when somebody doesn't respect me and my opinions. I always do my
              best. It doesn’t mean I’m perfect, but I always give 100% to everything I do and I try to learn from my
              mistakes. I would like to become a better Frontend Developer, eventually move to a Full stack
              Developer position and continually improve my multitasking skills. Below are some examples of my
              programming languages skills.
            </p>
            <p>
              My hobbies are: computer games, riding a bicycle, volleyball, football (soccer) and cars.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
