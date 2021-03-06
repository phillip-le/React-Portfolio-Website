import React from "react";
import SectionHeading from "./SectionHeading";
import SocialMedia from "./SocialMedia";
import "aos/dist/aos.css";


const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-details" data-aos="fade-in" data-aos-delay="300">
          <SectionHeading mainHeading="About" subHeading="Myself" />
          <p>
            I am a developer passionate about technology that transforms the way
            we work.
          </p>
          <div className="external-links">
            <ul className="nav-list">
              <SocialMedia
                link="https://www.linkedin.com/in/phillip-huy-le/"
                icon="fab fa-linkedin"
              />
              <SocialMedia
                link="https://github.com/phillip-le/"
                icon="fab fa-github-square"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
