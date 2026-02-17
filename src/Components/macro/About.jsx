import { ChevronRight } from "lucide-react";
import profile from "../../assets/profile.JPG";

import React from "react";

const About = () => {
  return (
    <section id="about"
    className="bg-linear-to-br from-gray-800 to-gray-700 text-white"
    >
      <h1 className="text-center text-2xl md:text-3xl font-sans py-6">
        About me
      </h1>




      <div className="w-full px-8 py-6   md:px-20 md:flex md:justify-around ">
        <div className="p-10 gap-2 w-141  md:flex ">
          <div className="md:p-10 lg:gap-5 flex justify-center items-center flex-col ">
            {/* photos */}
            <div className="h-50 w-50 flex justify-center items-center">
              <div
                className="h-50 w-50 bg-cover bg-center rounded-full"
                style={{ backgroundImage: `url(${profile})` }}
              ></div>
            </div>

            <h2 className="text-center text-justify font-medium">
              I build scalable web systems and AI-powered applications that
              solve real-world problems. Focused on performance, clean
              architecture, and future-ready technology.
            </h2>
          </div>
        </div>


        <div className="p-3 py-3 w-141 md:mx-10 flex items-center justify-center ">
          <div className=" bg-gray-950 text-green-600 p-10 rounded-sm">
            <div className="font-mono py-2">
              <div className="flex">
                <ChevronRight />
                <h3>whoami</h3>
              </div>
              <h3>Coder | AI Developer</h3>
            </div>

            <div className="">
              <div className="font-mono py-2">
                <div className="flex">
                  <ChevronRight />
                  <h3>stack</h3>
                </div>
                <h3>React • Node • Python • AI</h3>
              </div>
            </div>
            <div className="">
              <div className="font-mono py-2">
                <div className="flex">
                  <ChevronRight />
                  <h3>current_focus</h3>
                </div>
                <h3>Building intelligent web applications</h3>
              </div>
            </div>
            <div className="">
              <div className="font-mono py-2">
                <div className="flex">
                  <ChevronRight />
                  <h3>mission</h3>
                </div>
                <h3>Launch scalable AI products 🚀</h3>
              </div>
            </div>
            <div className="">
              <div className="font-mono py-2">
                <div className="flex">
                  <ChevronRight />
                  <h3>whoami</h3>
                </div>
                <h3>Coder | AI Developer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
