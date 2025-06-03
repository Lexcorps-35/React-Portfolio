import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <section className="home" id="home">
        <div className="home-img " data-aos="fade-right">
          <img src="src/assets/my photo4.jpg" alt="profile image" />
        </div>
        <div className="home-content" data-aos="fade-left">
          <h1>
            Hi, it's <span>Alex</span>
          </h1>
          <h3 className="typing-text">
            i'm a <span></span>
          </h3>
          <p className="text-xl">
            Focused on clean code, UX optimization, and seamless integration
                with backend systems. Passionate about delivering fast,
                accessible, and visually polished digital experiences.
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/ene-alexander-847b9033a/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Lexcorps-35">
              <FaSquareGithub />
            </a>
            <a href="https://x.com/ENE589648356793?t=QzOgyuf0y4UG5Dn9Fk19SA&s=09">
              <FaSquareXTwitter />
            </a>
            <a href="https://www.instagram.com/enealex3219?igsh=YzljYTk1ODg3Zg==">
              <FaInstagram />
            </a>
          </div>
          <a href="https://wa.me/qr/JTGFM5WOMDYXA1" className="btn">
            HIRE ME
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
