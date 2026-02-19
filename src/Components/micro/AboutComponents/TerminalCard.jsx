import React from "react";
import { ChevronRight } from "lucide-react";
const TerminalCard = () => {
  return (
    <div className="p-5  md:w-1/2">
      <div className="shadow-2xl">
        <div className=" w-full h-10 bg-gray-900 gap-3 px-3 rounded-t-sm flex items-center">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>

        <div className=" bg-gray-950  px-8 py-3 rounded-b-sm relative">
          <div className="font-mono py-1">
            <div className="">
              <div className="border-b-2 border-dotted">
                <div className="font-mono py-2 text-green-600">
                  <div className="flex">
                    <ChevronRight />
                    <h3>whoami</h3>
                  </div>
                  <h3>Coder | AI Developer</h3>
                </div>
              </div>

              <div className="border-b-2 border-dotted">
                <div className="font-mono py-2 text-green-600">
                  <div className="flex">
                    <ChevronRight />
                    <h3>stack</h3>
                  </div>
                  <h3>React • Node • Python • AI</h3>
                </div>
              </div>

              <div className="border-b-2 border-dotted">
                <div className="font-mono py-2 text-green-600">
                  <div className="flex">
                    <ChevronRight />
                    <h3>current_focus</h3>
                  </div>
                  <h3>Building intelligent web applications</h3>
                </div>
              </div>
              <div className="border-b-2 border-dotted">
                <div className="font-mono py-2 text-green-600">
                  <div className="flex">
                    <ChevronRight />
                    <h3>mission</h3>
                  </div>
                  <h3>Launch scalable AI products 🚀</h3>
                </div>
              </div>
              <div className="border-b-2 border-dotted">
                <div className="font-mono py-2 text-green-600">
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
      </div>
    </div>
  );
};

export default TerminalCard;
