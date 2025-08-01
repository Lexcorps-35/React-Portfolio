import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "Home",
  },
  {
    id: 2,
    title: "About",
    link: "About",
  },
  {
    id: 3,
    title: "Skills",
    link: "Skills",
  },
  {
    id: 4,
    title: "Services",
    link: "Services",
  },
  {
    id: 5,
    title: "Contact",
    link: "Contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <section className=" dark:bg-black ">
        <nav
          className="flex items-center justify-between fixed w-full max-w-screen z-50 bg-white/80 dark:bg-black/60 backdrop-blur-md shadow-md"
          data-aos="fade-down"
        >
          <div className="flex mt-3">
            <a href="#">
              <img
                src="/my-logo.png"
                alt="Logo Image"
                className="w-30 h-20 -mt-5 -ml-4"
              />
            </a>
            <h1 className="-ml-10 text-4xl ty">Lexcorps</h1>
          </div>
          {/*Nav  Links  */}
          <div className="hidden md:flex gap-7 text-xl mt-3 fry">
            {NavLinks.map((nav) => (
              <Link
                key={nav.id}
                to={nav.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active-link"
                className="group relative inline-block cursor-pointer text-gray-800 dark:text-gray-300 transition-colors hover:text-red-600"
              >
                {nav.title}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="flex gap-4 mt-3">
            <div
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              className="flex border-2 rounded-3xl h-7 bg-gray-200 hover:bg-gray-400 px-1 mr-2 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer transition-colors"
            >
              {theme === "dark" ? (
                <MdDarkMode className="size-7 pb-1 hover:animate-spin" />
              ) : (
                <MdOutlineLightMode className="size-7 pb-1 text-yellow-500 hover:animate-spin" />
              )}
            </div>

            {/* Mobile Menu Icon */}
            <div
              className="md:hidden h-10 text-2xl cursor-pointer"
              onClick={toggleMenu}
            >
              {isOpen ? <IoClose /> : <RiMenu3Line />}
            </div>
          </div>
        </nav>

        {/* Mobile Sidebar Menu */}
        <div
          className={`fixed top-18 left-0 h-screen w-80 bg-[#c4205c] text-black dark:text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out rounded-br-xl ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="p-6">
            <a
              onClick={closeMenu}
              href="#Home"
              className="block py-3 border-b border-white/30"
            >
              Home
            </a>
            <a
              onClick={closeMenu}
              href="#About"
              className="block py-3 border-b border-white/30"
            >
              About
            </a>
            <a
              onClick={closeMenu}
              href="#Skills"
              className="block py-3 border-b border-white/30"
            >
              Skills
            </a>
            <a
              onClick={closeMenu}
              href="#Services"
              className="block py-3 border-b border-white/30"
            >
              Services
            </a>
            <a
              onClick={closeMenu}
              href="#Contact"
              className="block py-3 border-b border-white/30"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
