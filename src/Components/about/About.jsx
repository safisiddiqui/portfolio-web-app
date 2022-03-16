import React from "react";
import "../about/About.styles.css";
import ME from "../../assets/safi.jpg";
import { FaAward } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";

const About = () => {
  return (
    <section id="about" className="section_about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5>Education</h5>
              <small>Bachelors in Psychology & Computer Science </small>
            </article>

            <article className="about__card">
              <MdWorkOutline className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Proficient ReactJS developer with 4 years of experience creating
            progressive Web-Apps. I am self-motivated with coursework and
            training and willing to learn and grow for my career. My main goal
            is to be able to work in a company that I can add value to, where I
            can produce a positive return on investment, and where I can join a
            strong team while demonstrating my expertise in my skills.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
