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
              I'm Mikołaj (if you want to Nicolas ;) ), Frontend Developer from
              a passion. I'm living in Warsaw near to Szczesliwicki Park.
            </p>
            <p>
              I studied on Electronic and Telecomunication faculty of studies on
              Warsaw University of Technology.
            </p>
            <p>
              I am very ambitious person who would like to create something
              better. When I am in team i feel alive. I am very loyal person but
              I hate when somebody doesn't respect me and my opinion. I do my
              best. Not always I am perfect but try my best and learning on my
              mistakes. I would like to be better and better Frontend Developer
              eventually Fullstack developer and still learn multitasking. My
              skill in programming languages leave you to evaluate...
            </p>
            <p>
              My hobbies are computer games, riding a bicycle, volleyball,
              football(soccer) and cars.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
