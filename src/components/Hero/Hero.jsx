import React from "react";
import "./hero.css";
import heroImg from "../../assets/Ag.png";
import { Link } from "react-scroll";
import hireImg from "../../assets/hireme.png";
import Contact from "../Contact/Contact";

const Hero = () => {
  return (
    <section id="hero">
      <div className="heroContent">
        <span className="hello">Hello,</span>
        <span className="heroText">
          I'm <span className="heroName">Ajay Godara</span> <br />
          Web Developer
        </span>
        <p className="heropara">
          I am a skilled full stact web developer with experience in creating
          visually <br />
          appealing and user friendly websites.
        </p>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <button href="#contactPage" className="hireBtn">
            <img
              src={hireImg}
              alt=""
              className="hireImg"
            />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={heroImg} alt="" className="heroImg" />
    </section>
  );
};

export default Hero;
