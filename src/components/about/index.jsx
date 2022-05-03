import React from "react";
import "./style.css";

const About = ({ socials }) => {
  return (
    <div className="about-wrapper">
      <div className="about-left">
        <div className="about-left-top">
          <h4>More about me</h4>
          <p>
            <span role="img" aria-label="from">
              🌏
            </span>{" "}
            From: Elmahala-Elkoubra city,Gharbia, Egypt
          </p>
          {/* <p>
            <span role="img" aria-label="live">
              🌏
            </span>{" "}
            Lives: Gadah city , Saudi Arabia
          </p> */}
          {/* <p>
            <span role="img" aria-label="email">
              📨
            </span>{" "}
            Email: youyaahmed1731993@gmail.com
          </p> */}
          <p>
            <span role="img" aria-label="languages">
              🎓
            </span>{" "}
            Native Languages: Arabic <br /> second Languages: English
          </p>
          <p>
            <span role="img" aria-label="education">
              📕
            </span>{" "}
            Education: Bachelor of Education from the Faculty of Education,
            Mansoura University
          </p>
          <p>
            <span role="img" aria-label="experience">
              📕
            </span>{" "}
            Experience: A great and oriented teacher in the Arabic language
          </p>
          <hr />
        </div>

        <div className="about-left-bot">
          <h3>Find me on social media </h3>
          <div className="about-left-bot__socials-icons">
            {socials.map((social) => {
              return (
                <a
                  key={social.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.link}
                >
                  <img
                    align="left"
                    alt={social.alt}
                    width="50px"
                    src={social.src}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div className="about-right">
        <h4>Top Expertise</h4>
        <p>
          Medical-Radiology Doctor with primary focus on Radiology and Imaging:{" "}
          <a target="__blank" rel="noopener noreferrer" href="/resume.pdf">
            Download Résumé
          </a>{" "}
        </p>
        <div className="about-right__skills">
          <div className="about-right__skills-languages">
            <p> Experience : </p>
            {languages.map((language) => {
              return (
                <img
                  key={language.id}
                  align="left"
                  alt={language.alt}
                  width="26px"
                  src={language.src}
                />
              );
            })}
          </div>
          <div className="about-right__skills-tools">
            <p>Tools : </p>
            {tools.map((tool) => {
              return (
                <img
                  key={tool.id}
                  align="left"
                  alt={tool.alt}
                  width="26px"
                  src={tool.src}
                />
              );
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
