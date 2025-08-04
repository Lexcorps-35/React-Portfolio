import React from "react";
import { useInView } from "react-intersection-observer";
import Projects from "./Projects";
import CountUpNumber from "./CountUpNumber";
import { IoLogoHtml5 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";

const skills = [
  {
    label: "HTML",
    value: 95,
    icon: <FaHtml5 className="text-orange-500 text-2xl mr-2" />,
  },
  {
    label: "CSS",
    value: 90,
    icon: <FaCss3Alt className="text-blue-500 text-2xl mr-2" />,
  },
  {
    label: "JavaScript",
    value: 50,
    icon: <FaJs className="text-yellow-400 text-2xl mr-2" />,
  },
  {
    label: "React",
    value: 70,
    icon: <FaReact className="text-cyan-500 text-2xl mr-2" />,
  },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section
      id="Skills"
      ref={ref}
      className="bg-[#f5f1e6] dark:bg-gradient-to-r from-[#1a1a1a] to-[#000000] text-black dark:text-gray-300 px-6 py-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <span class="max-w-3xl mx-auto flex items-center my-10">
          <span class="h-[2px] flex-1 bg-gradient-to-r from-transparent to-gray-400 dark:to-gray-600"></span>
          <h2 className=" shrink px-4 text-3xl font-bold text-center text-gray-800 dark:text-white text-shadow-red-400 text-shadow-lg">
            MY SKILLS
          </h2>
          <span class="h-[2px] flex-1 bg-gradient-to-l from-transparent to-gray-400 dark:to-gray-600"></span>
        </span>
        <h3 className="text-xl font-semibold text-red-500 text-center mb-8">
          skills Reflects Our Knowledge
        </h3>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT: Description + Experience */}
          <div data-aos="fade-right">
            <p className="mb-10 text-gray-700 font-semibold dark:text-white leading-relaxed text-justify">
              I mastered frontend web development through hands-on training at
              Nnewi Tech Faculty, where I built responsive, user-centric
              interfaces using HTML, CSS, JavaScript, and React. Through
              project-based learning, I honed skills in component architecture,
              state management, and API integration while adopting best
              practices in accessibility and performance. Collaborating with
              peers and mentors, I refined my ability to transform designs into
              functional, scalable web applications.
            </p>

            <div className="flex gap-4 items-center try">
              <p className="text-8xl font-bold bg-gradient-to-br from-gray-700 to-pink-500 bg-clip-text text-transparent">
                8
              </p>
              <p className="text-xl font-semibold text-black dark:text-white">
                Months Of <br /> Experience
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 text-center items-center justify-items-center"
            data-aos="fade-up"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center  bg-gray-300 dark:bg-[#1f2937] rounded-xl px-4 py-5 w-full shadow-xl dark:shadow-pink-400
    hover:scale-105 hover:shadow-[0_0_15px_#ff4d4d]
                 dark:hover:shadow-[0_0_20px_#ff4d4d]
                 transition duration-300 ease-in-out cursor-pointer"
              >
                <div className="flex items-center justify-center mb-2  ">
                  {skill.icon}
                  <span className="bg-gradient-to-r from-gray-700 to-pink-500 bg-clip-text text-transparent text-2xl font-semibold">
                    {skill.label}
                  </span>
                </div>
                <p className="text-3xl font-bold text-red-400">
                  <CountUpNumber
                    target={skill.value}
                    duration={2500}
                    isVisible={inView}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Projects />
    </section>
  );
};

export default Skills;
