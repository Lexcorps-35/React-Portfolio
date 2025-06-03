import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const MobileMenu = ({ open, onItemClick }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-[calc(100vh-5rem)] z-20"
        >
          <div
            className="text-xl font-semibold bg-red-400/90 text-white py-10
 m-10 rounded-3xl"
          >
            <ul className="flex flex-col justify-center items-center gap-10">
              <a href="#home" onClick={onItemClick}>
                <li className="hover:text-black cursor-pointer">Home</li>
              </a>
              <a href="#skills" onClick={onItemClick}>
                <li className="hover:text-black cursor-pointer">Skills</li>
              </a>
              <a href="#services" onClick={onItemClick}>
                <li className="hover:text-black cursor-pointer">Services</li>
              </a>
              <a href="#Contact" onClick={onItemClick}>
                <li className="hover:text-black cursor-pointer">Contact</li>
              </a>
            </ul>
          </div>
        </motion.div>
      )}
      ;
    </AnimatePresence>
  );
};

export default MobileMenu;
