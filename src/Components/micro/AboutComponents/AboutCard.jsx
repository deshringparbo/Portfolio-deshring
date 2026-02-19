import React from "react";
import profile from "../../../assets/profile.JPG";
import LinkButton from "../../../elements/LinkButton"
const AboutCard = () => {
  return (
    <div className="p-5 md:w-1/2 font-serif ">
      <div className="">
        <div className="gap-5 py-5 md:p-5 lg:gap-5 flex justify-center items-center flex-col bounded-lg lg:shadow-2xl">
          <div className="h-30 w-30 md:h-60 md:w-60 flex justify-center items-center">
            <div
              className="h-30 w-30 md:h-60 md:w-60 bg-cover bg-center rounded-full border-2 border-gray-600 shadow-[0_0_40px_rgba(59,130,246,0.8)]  "
              style={{ backgroundImage: `url(${profile})` }}
            ></div>
          </div>

          <h2 className="text-justify font-medium px-2 md:md">
            I build scalable web systems and AI-powered applications that solve
            real-world problems. Focused on performance, clean architecture, and
            future-ready technology.
          </h2>
          <div className="flex justify-around w-full h-10">
            <LinkButton name="Follow " />
            <LinkButton name="Follow " />
            <LinkButton name="Follow " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
