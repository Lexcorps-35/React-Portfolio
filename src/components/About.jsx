import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <section
        class="about min-h-screen bg-gradient-to-r from-black to-red-900"
        id="about"
      >
        <div class="content">
          <div class="title">
            <span>About Me</span>
          </div>
          <div class="about-details">
            <div class="left" data-aos="fade-right">
              <img
                src="/src/assets/my photo3.jpg"
                alt=""
                height="400px"
                width="400px"
              />
            </div>
            <div class="right">
              <div class="topic" data-aos="fade-left">
                Designing Is My Passion
              </div>
              <p data-aos="fade-left">
                i'm a web develper with in-depth Experience in html/css design. In a
            nutshell, i create websites that help orgainations address business
            challenges and meet their needs. I manage everything from website
            navigation and layout to a company`s web hosting and security
            architechture. i was interested in the technical side of web design
            and i decided to transition to web development. Through Nnewi Tech
            Faculty, i honed my skills in HTML,CSS,Javascript, and React. i work
            at a mid sized tech company where i collaborate with designers and
            back-end developers to create responsive and visually appealing web
            applications. my goal is to become a full-stack developer and
            eventually lead a development team.{" "}
              </p>
              <div class="button" data-aos="fade-up">
                <a href="./public/Resume.pdf" download>
                  <button>Download CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="skills" id="skills">
        <div class="content">
          <div class="title">
            <span>My skills</span>
          </div>
          <div class="skills-details">
            <div class="text">
              <div class="topic" data-aos="fade-right">
                skills Reflects Our Knowledge
              </div>
              <p data-aos="fade-right">
                I mastered frontend web development through hands-on training at
                Nnewi Tech Faculty, where I built responsive, user-centric
                interfaces using HTML, CSS, JavaScript, and React. Through
                project-based learning, I honed skills in component
                architecture, state management, and API integration while
                adopting best practices in accessibility and performance.
                Collaborating with peers and mentors, I refined my ability to
                transform designs into functional, scalable web applications.{" "}
              </p>
              <div class="Experience" data-aos="fade-right">
                <div class="num">8</div>
                <div class="exp">
                  Months Of <br />
                  Experience
                </div>
              </div>
            </div>
            <div class="boxes" data-aos="fade-up">
              <div class="boxx">
                <div class="topic">HTML</div>
                <div class="per">95%</div>
              </div>
              <div class="boxx">
                <div class="topic">CSS</div>
                <div class="per">90%</div>
              </div>
              <div class="boxx">
                <div class="topic">Javascript</div>
                <div class="per">50%</div>
              </div>
              <div class="boxx">
                <div class="topic">React</div>
                <div class="per">50%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="skills" id="skills">
        <div class="content ">
          <div class="title">
            <span>My Projects</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
            <a
              href="https://phone-validator-sigma.vercel.app/"
              data-aos="fade-up"
            >
              <div className="rounded-lg shadow-[0_0_10px_red] overflow-hidden hover:shadow-[0_0_30px_red]">
                <img
                  src="./src/assets/Screenshot (106).png"
                  alt="Screenshot 106"
                  className="w-full h-auto object-cover"
                />
                <p className="text-2xl p-5 inline-flex">
                  Phone Number Validation App
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </p>
              </div>
            </a>

            <a href="https://ntic-frontend-psi.vercel.app/" data-aos="fade-up">
              <div className="rounded-lg shadow-[0_0_10px_red] overflow-hidden hover:shadow-[0_0_30px_red]">
                <img
                  src="./src/assets/Screenshot (105).png"
                  alt="Screenshot 105"
                  className="w-full h-auto object-cover"
                />
                <p className="text-2xl p-5 inline-flex">
                  Frontend Design For NTIC Nnewi
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </p>
              </div>
            </a>

            <a href="https://agbedeo-farmart.vercel.app/" data-aos="fade-up">
              <div className="rounded-lg shadow-[0_0_10px_red] overflow-hidden hover:shadow-[0_0_30px_red]">
                <img
                  src="./src/assets/Screenshot (107).png"
                  alt="Screenshot 107"
                  className="w-full h-auto object-cover"
                />
                <p className="text-2xl p-3 inline-flex">
                  {" "}
                  Agbedoe Farmat web design
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
