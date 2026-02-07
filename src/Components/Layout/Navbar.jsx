import React, { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const menuLink = [
  { name: "Home", path: "/" },
  { name: "About me", path: "/About" },
  { name: "My Learning", path: "/MyLearning" },
  { name: "Connect", path: "/Connect" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    // <div className="flex justify-center items-center bg-pink-300 py-3">
      <nav className=" bg-gray-800  py-2  md:px-1 lg:px-30 rounded-b-md sticky top-0">
        <div className=" items-center flex justify-between px-10 lg:px-20  ">
          <div className="text-amber-50  font-mono text-2xl px-4">
            logo
          </div>
          {/* for desktop view */}
          <div className="hidden md:block  ">
            {menuLink.map((item) => (
              <Link
                className="text-amber-100 px-6  hover:text-amber-300 "
                key={item.path}
                to={item.path}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
          className="block md:hidden" onClick={()=>setOpen(!open)}>
            {open? <X /> : <Menu />}
          </button>
        </div>
        {/* for mobile view */}
        <div className={`${open?"block" : "hidden"} md:hidden bg-gray-800 space-y-3 p-2 mt-3 rounded-md`}>
          {menuLink.map((item) => (
            <Link
              className="text-amber-100 px-6 block hover:text-amber-300   rounded-md active:bg-gray-900  "
              key={item.path}
              to={item.path}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    // </div>
  );
};

export default Navbar;
