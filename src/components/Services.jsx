import React, { useState } from "react";
import {
  FaPaintBrush,
  FaChartLine,
  FaCameraRetro,
  FaTabletAlt,
} from "react-icons/fa";
import { CgDesktop } from "react-icons/cg";
import { DiAndroid } from "react-icons/di";
import "./Services.css";
import emailjs from "emailjs-com";

const Services = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_hw0y13m";
  const TEMPLATE_ID = "template_6vygyyn";
  const PUBLIC_KEY = "4KyUSZDM6ajVmuTqA";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <div>
      <section
        className="services min-h-screen bg-gradient-to-r from-black to-red-900"
        id="services"
      >
        <div class="content">
          <div class="title">
            <span>My Services</span>
          </div>
          <div class="boxes">
            <div class="box" data-aos="fade-right">
              <div className="icon flex items-center justify-center">
                <CgDesktop />
              </div>
              <div className="topicc text-blue-500">Web Development</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci illum porro omnis ex deleniti aliquid facere? Libero
                cupiditate{" "}
              </p>
            </div>
            <div className="box" data-aos="fade-up">
              <div className="icon flex items-center justify-center">
                <FaPaintBrush />
              </div>
              <div class="topicc ">Graphic Design</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum ut nisi obcaecati minus iure dicta odio perferendis
                nulla voluptate{" "}
              </p>
            </div>
            <div class="box" data-aos="fade-left">
              <div className="icon flex items-center justify-center">
                <FaChartLine />
              </div>
              <div class="topicc">Digital Marketing</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus provident eveniet inventore vel dolore nisi
                repellendus optio incidunt{" "}
              </p>
            </div>
            <div class="box" data-aos="fade-right">
              <div className="icon flex items-center justify-center">
                <DiAndroid />
              </div>
              <div class="topicc">Icon Design</div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                repudiandae vitae, officia, distinctio aspernatur voluptatibus
                quos omnis iusto,{" "}
              </p>
            </div>
            <div class="box" data-aos="fade-up">
              <div className="icon flex items-center justify-center">
                <FaCameraRetro />
              </div>
              <div class="topicc">Photograghy</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                magni aspernatur velit atque maxime perferendis{" "}
              </p>
            </div>
            <div class="box" data-aos="fade-left">
              <div className="icon flex items-center justify-center">
                <FaTabletAlt />
              </div>
              <div class="topicc">Apps Development</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quae cum velit nostrum laboriosam, sint incidunt
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        class="Contact min-h-screen bg-gradient-to-r from-black to-red-900 flex items-center justify-center py-20"
        id="Contact"
      >
        <div class="content">
          <div class="title">
            <span>Contact Me</span>
          </div>
          <div class="text px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
            <div
              class="topic text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-cente"
              data-aos="fade-up"
            >
              Have Any Project?
            </div>
            <p data-aos="fade-up">
              Have Any Project? Contact me with any of the preferred mediums
              available below, of course always have in mind that we can be of
              service to any project you have in mind while visiting usc contact
              us today and lets help you reach height of your imaginations in
              ways you have imagined them.
            </p>
            <div class="button" data-aos="fade-up">
              <h2 className="text-red text-4xl md:text-4xl font-semibold mb-4">
                {" "}
                Message Us
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-white/5
                 border border-white/10 rounded px-4 py-3
                 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
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
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
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
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="Your Message..."
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="text">
          <span>
            Created By
            <a href="#"> LEXCORPS </a>
            &#169; 2024 All Rights Rreserved{" "}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Services;
