import React, { useEffect, useState } from "react";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileMenu from "./MobileMenu";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4">
      <header className="header" data-aos="fade-down">
        <a href="#" className="logo">
          LEXCORPS
        </a>

        <nav className="navbar">
          <a href="#home" className="">
            Home
          </a>
          <a
            href="#about"
            className=""
          >
            About
          </a>
          <a
            href="#skills"
            className=""
          >
            Skills
          </a>
          <a
            href="#services"
            className=""
          >
            Services
          </a>
          <a
            href="#Contact"
            className=""
          >
            Contact
          </a>
        </nav>
        <div
          className="md:hidden h-10 w-5 relative block text-xl cursor-pointer top-4 right-4 p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <RiMenu3Line />}
        </div>

        <MobileMenu open={isOpen} onItemClick={closeMenu} />
      </header>
    </div>
  );
};

export default Navbar;
