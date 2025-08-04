import React from "react";
import TypeWriter from "./TypeWriter";

const Home = () => {
  return (
    <div
      className=" flex px-6 animate-bg bg-white bg-[radial-gradient(#00000022_1px,_transparent_1px)] bg-[size:20px_20px] dark:bg-black dark:bg-[radial-gradient(#ffffff33_1px,_#00091d_1px)] dark:bg-[size:20px_20px] w-full"
      id="Home"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between  w-full">
        {/* Profile Image */}
        <div
          className="md:w-[40rem] md:h-[430px] w-[20rem] rounded-[70%] overflow-hidden shadow-[0_0_50px_#ff0000] mt-21 md:mb-6
        mx-auto md:mx-0 transition duration-500 ease-in-out transform 
             hover:scale-105 active:scale-95 cursor-pointer"
          data-aos="fade-right"
        >
          <img
            src="/my-photo4.jpg"
            alt="Alex"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Hero Text Content */}
        <div
          className="md:mt-[10rem] mt-10 text-center md:text-left hed md:ml-[10rem]"
          data-aos="fade-left"
        >
          <h1 className="text-5xl font-bold text-black dark:text-white">
            Hi, it's{" "}
            <span className="text-red-500 text-shadow-red-400 text-shadow-lg">
              Alex
            </span>
          </h1>
          <div className="flex gap-3">
            <h2 className="mt-4 text-4xl font-bold text-black dark:text-white">
              I'm a
            </h2>
            <TypeWriter />
          </div>
          <p className="text-lg md:text-base font-semibold text-gray-800 mt-4 dark:text-white">
            Focused on clean code, UX optimization, and seamless integration
            with backend systems. Passionate about delivering fast, accessible,
            and visually polished digital experiences.
          </p>

          

          {/* Hire Me Button */}
          <a href="https://wa.me/09126667812?text=Hi+good+day+I+have+a+frontend+project+i+would+like+you+to+work+on">
            <button className="btn mt-6 mb-6">HIRE ME</button>
          </a>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden mt-20">
        <div
          className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full
          mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-purple-600"
        ></div>
      </div>

      <div
        className=" absolute mt-20 md:left-1/4 left-1/5 w-72 h-72 bg-blue-300 rounded-full
          mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-blue-600"
      ></div>

      <div
        className=" mt-30 absolute bottom-0 left-1/5 md:left-1/2 w-72 h-72 bg-indigo-300 rounded-full
          mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-indigo-600"
      ></div>

      <div
        className=" mt-35 absolute bottom-0 right-1/2 w-72 h-72 bg-red-300 rounded-full
          mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-red-600"
      ></div>
    </div>
  );
};

export default Home;
