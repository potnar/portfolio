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
          <div className="bg-text">ABOUT</div>
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
