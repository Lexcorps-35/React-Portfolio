import React, { useState, useRef} from 'react'
import emailjs from '@emailjs/browser';



const Contact = () => {
    const formRef = useRef();


 const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_x6q5c7e";
  const TEMPLATE_ID = "template_6vygyyn";
  const PUBLIC_KEY = "4KyUSZDM6ajVmuTqA";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          alert("Message Sent!");
            formRef.current.reset();
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
      <div>
          
          <section  id="Contact">
               {/* Header */}
                  <span className="max-w-3xl mx-auto flex items-center my-5">
  <span className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-gray-400 dark:to-gray-600"></span>
<h2 className=" shrink px-4 text-3xl font-bold text-center text-gray-800 dark:text-white text-shadow-red-400 text-shadow-lg">CONTACT</h2>
<span className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-gray-400 dark:to-gray-600"></span>
                  </span>
              <div className="md:-mt-[10rem]   min-h-screen bg-[#f5f1e6] dark:bg-gradient-to-r from-[#1a1a1a] to-[#000000] text-black dark:text-gray-300 items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-10" >
          <div className="text px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
            <div
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent"
              data-aos="fade-up hed"
            >
              Have Any Project?
            </div>
            <div className="button" data-aos="fade-up">
              <h2 className="text-red text-4xl md:text-4xl font-semibold mb-4 fry">
                {" "}
                Message Us
              </h2>
              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                required
                 value={formData.name}
                    className="w-full bg-white/70 dark:bg-white/5
                 border border-white/10 rounded px-4 py-3
                 dark:text-white transition focus:outline-none focus:border-red-500 focus:bg-blue-500/5"
                                      placeholder="Name..."
                                      onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                                      required
                                      value={formData.email}
                    className="w-full bg-white/70 dark:bg-white/5 border border-white/10 rounded px-4 py-3 dark:text-white transition focus:outline-none focus:border-red-500 focus:bg-blue-500/5"
                                      placeholder="example@gmail.com"
                                       onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                                      rows={5}
                                      value={formData.message}
                    className="w-full bg-white/70 dark:bg-white/5 border border-white/10 rounded px-4 py-3 dark:text-white text-gray-500 transition focus:outline-none focus:border-red-500 focus:bg-blue-500/5"
                                      placeholder="Your Message..."
                                      onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#fa3d3b] text-white py-2 px-4 rounded-2xl font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  Send Message
                </button>
              </form>
                      </div>
                  </div>
                  <img src="/email-sent.png" alt="" className="slow-bounce mt-[15rem] hidden md:flex"/>
              </div>
          </section>
    </div>
  )
}

export default Contact