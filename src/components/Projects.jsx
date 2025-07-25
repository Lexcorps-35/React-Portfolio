import React from "react";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Agboedo Mart",
      description: "A responsive React project showcasing my skills and work.",
      image: "src/assets/Agbeoedo.png",
      link: "https://agbedeo-farmart.vercel.app/",
    },
    {
      id: 2,
      title: "Landing Page",
      description: "Modern, responsive product landing page with animations.",
      image: "src/assets/Landing page.png",
      link: "https://ntic-frontend-psi.vercel.app/",
    },
    {
      id: 3,
      title: "Phone Validator",
      description: "An app that detects Nigerian Phone numbers smartly.",
      image: "src/assets/Validator app.png",
      link: "https://phone-validator-sigma.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="bg-[#f5f5f5] dark:bg-[#0f0f0f] py-16 px-6 mt-8">
      <div className="max-w-6xl mx-auto">
         <span class="max-w-3xl mx-auto flex items-center my-10">
  <span class="h-px flex-1 bg-gradient-to-r from-transparent to-gray-400 dark:to-gray-600"></span>
<h2 className=" shrink px-4 text-3xl font-bold text-center text-gray-800 dark:text-white text-shadow-red-400 text-shadow-lg">MY PROJECTS</h2>
<span class="h-px flex-1 bg-gradient-to-l from-transparent to-gray-400 dark:to-gray-600"></span>
        </span>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className=" backdrop-blur-2xl dark:bg-white/10 border border-white/10 rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-red-400">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover py-2 px-2 rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-black dark:text-white -mt-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2 w-36 mt-4 px-4 py-2 text-sm font-medium text-white  rounded-2xl bg-[#fa3d3b] hover:bg-[#7B011E] transition flex"
                >
                          View Project
                          <HiMiniArrowTopRightOnSquare className="size-4.5"/>
                </a>
              </div>
            </div>
          ))}
        </div>       
      </div>
    </section>
  );
};

export default Projects;
