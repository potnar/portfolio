import React from "react";
import Particles from "react-particles-js";
import "./ParticleComponent.scss";

export default () => (
  <div className="particles-container">
    <Particles
      params={{
        height: "100vh",
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 1803.4120608655228,
            },
          },
          size: {
            value: 3,
          },
        },
        opacity: {
          value: 0.4008530152163807,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: false,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
      }}
    />
  </div>
);
