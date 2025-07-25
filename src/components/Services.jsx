import React from 'react'
import { GiSmartphone } from "react-icons/gi";
import { MdScreenSearchDesktop } from "react-icons/md";
import { PiPaintBrushFill } from "react-icons/pi";

const ServicesData = [
    {
id: 1,
title: "Website Development"  ,     
icon: <MdScreenSearchDesktop className='text-2xl text-red-400'/>,
link: "/gwjd",
desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Adipisci illum porro omnis ex deleniti aliquid facere? Libero cupiditate",
delay: 1.2,
    },
      {
id: 2,
title: "UI/UX Design"  ,     
icon: <PiPaintBrushFill className='size-5 text-red-400'/>,
link: "/gwjd",
desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Adipisci illum porro omnis ex deleniti aliquid facere? Libero cupiditate",
delay: 1.6,
    },
        {
id: 3,
title: "Frontend Web Development"  ,     
icon: <GiSmartphone className='size-5 text-red-400'/>,
link: "/gwjd",
desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Adipisci illum porro omnis ex deleniti aliquid facere? Libero cupiditate",
delay: 2,
},
]

const Services = () => {
  return (
      <div>
          <section id="Services" className="bg-[#f5f1e6] dark:bg-gradient-to-r from-[#1a1a1a] to-[#000000] text-black dark:text-gray-300 px-6 py-16">
                {/* Header */}
                  <span class="max-w-3xl mx-auto flex items-center my-5">
  <span class="h-[2px] flex-1 bg-gradient-to-r from-transparent to-gray-400 dark:to-gray-600"></span>
<h2 className=" shrink px-4 text-3xl font-bold text-center text-gray-800 dark:text-white text-shadow-red-400 text-shadow-lg">SERVICES</h2>
<span class="h-[2px] flex-1 bg-gradient-to-l from-transparent to-gray-400 dark:to-gray-600"></span>
                  </span>
              
              <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8 justify-center">
                 
                    {ServicesData.map((service, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-white/30 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl dark:text-white text-gray-900 transition duration-300 hover:scale-105"
          >
            <div className="bg-white/50 dark:bg-white/20 p-4 rounded-full w-fit mb-4 border-3 border-gray-600">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{service.desc}</p>
          </div>
        ))}            

                  </div>
                  </section>
    </div>
  )
}

export default Services