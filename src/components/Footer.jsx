import React from 'react'
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, behavior:
                "smooth"
        });
    };
  return (
      <div>
          <footer class="bg-gradient-to-b from-white to-blue-200 dark:from-gray-900 dark:to-gray-900 text-black dark:text-white py-6 px-4 mt-10">
<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
    
    
   <a href="#"> <div class="flex items-center">
      <img src="/my-logo.png" alt="Lexcorps Logo" class="h-16" />
      <span class="text-4xl font-bold ty">Lexcorps</span>
    </div></a>

   
    <div class="text-xl font-bold">
      &copy; 2025 <a href="#" class="hover:underline text-red-400 font-medium">LEXCORPS</a>. All rights reserved.
      <div class="text-xs text-gray-400 mt-1">Crafted with 💼 passion & precision.</div>
    </div>

    
                  <button onClick={scrollToTop}
                  aria-label='Back to Top'    class="text-red-600 hover:text-gray-400 transition hover:shadow-2xl">
      <FaArrowCircleUp className='size-10'/>
    </button>

  </div>
</footer>

    </div>
  )
}

export default Footer