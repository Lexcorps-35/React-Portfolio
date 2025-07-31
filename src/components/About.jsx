import React from "react";

const About = () => {
  return (
    <section
      class=" bg-white dark:bg-gray-900 lg:grid lg:place-content-center mb-8"
      id="About"
    >
      <span class="max-w-3xl md:mx-0 mx-auto flex items-center my-10 md:ml-[12rem]">
        <span class="h-[2px] flex-1 bg-gradient-to-r from-transparent to-gray-400 dark:to-gray-600"></span>
        <h2 className=" shrink px-4 text-3xl font-bold text-center text-gray-800 dark:text-white text-shadow-red-400 text-shadow-lg">
          ABOUT ME
        </h2>
        <span class="h-[2px] flex-1 bg-gradient-to-l from-transparent to-gray-400 dark:to-gray-600"></span>
      </span>
      <div className="mx-auto  md:grid md:grid-cols-2 md:items-center md:gap-5 ">
        <div className="mt-10 md:mt-0" data-aos="fade-right">
          <img
            src="/my-photo3.jpg"
            alt="About Image"
            className="rounded-2xl w-[25rem] h-[25rem] mx-auto object-cover shadow-2xl mb-5"
          />
        </div>

        <div
          className="py-1 px-6 max-w-prose text-center md:text-left"
          data-aos="fade-left"
        >
          <p className="text-center font-semibold mb-2 text-red-500 text-2xl">
            Designing Is My Passion...
          </p>

          <p className="text-gray-800 dark:text-white leading-relaxed text-justify fry">
            I'm a web developer with in-depth experience in HTML/CSS design. In
            a nutshell, I create websites that help organizations address
            business challenges and meet their needs. I manage everything from
            website navigation and layout to a company’s web hosting and
            security architecture.
            <br />
            <br />
            I was interested in the technical side of web design and decided to
            transition to web development. Through Nnewi Tech Faculty, I honed
            my skills in HTML, CSS, JavaScript, and React. I work at a mid-sized
            tech company where I collaborate with designers and back-end
            developers to create responsive and visually appealing web
            applications.
            <br />
            <br />
            My goal is to become a full-stack developer and eventually lead a
            development team.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start btn">
            <a className=" " href="public/Portfolio Resume.pdf" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
