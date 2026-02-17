import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Github,
  Linkedin,
  Youtube,
  X,
  ArrowDown,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="herosection"
      className="py-30  md:h-screen w-full bg-linear-to-tr from-gray-800 to-gray-600 flex items-center justify-center flex-col"
    >
      <div className="py-10 px-6 gap-8  md:w-4/5 md:gap-8  flex flex-col text-white  items-center animate-slideUp ">
        <h1 className="text-center text-2xl md:text-5xl font-bold font-serif bg-linear-to-r from-green-400 to-sky-500 bg-clip-text text-transparent ">
          Hi, I'm Coder 👋
        </h1>
        <p className="text-sm  md:w-3/5 text-center animate-slideUp">
          AI Developer | MERN Stack Developer Building Intelligent Web
          Experiences
        </p>
        {/* links of the platform */}
        <div className="md:w-3/5 px-6  flex items-center justify-center py-10 flex-col gap-6 border rounded-md animate-slideIn  ">
          <h3>Connect with me here - </h3>
          <div className="flex justify-center gap-6  py-3 px-3 flex-wrap ">
            <a
              className="bg-gray-600 p-3 rounded-full hover:bg-gray-600"
              href=""
            >
              {" "}
              <Linkedin size={18} />
            </a>
            <a
              className="bg-gray-600 p-3 rounded-full hover:bg-gray-600"
              href=""
            >
              {" "}
              <Github size={18} />
            </a>
            <a
              className="bg-gray-600 p-3 rounded-full hover:bg-gray-600"
              href=""
            >
              <Facebook size={18} />
            </a>
            <a
              className="bg-gray-600 p-3 rounded-full hover:bg-gray-600"
              href="https://x.com/deshrocxi"
            >
              <X size={18} />
            </a>
            <a
              className="bg-gray-600 p-3 rounded-full hover:bg-gray-600"
              href="https://www.instagram.com/deshringparbosa"
            >
              <Instagram size={18} />
            </a>
            <a
              className="bg-gray-600 p-3 rounded-full hover:bg-gray-600"
              href=""
            >
              <Youtube size={18} />
            </a>
            <a href=""> </a>
          </div>
        </div>
      </div>
      <h1 className="pt-20"> <ArrowDown className="animate-bounce text-white h-12 w-12" /> </h1>
    </section>
  );
};

export default Hero;
