import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const menulinks = [
  { name: "Home", path: "/" },
  { name: "Learning", path: "/learning" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Blogs", path: "/blogs" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white fixed">
      {/* Top Bar */}
      <div className="px-6 py-4 flex items-center justify-between  md:px-42">
        {/* Logo */}
        <div className="text-xl font-bold">Des.</div>

        {/*  Desktop Menu  */}
        <div className="hidden md:flex gap-8">
          {menulinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-indigo-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button
         onClick={()=>{}} // need to add link to open
        className="hidden lg:block bg-amber-50 text-black px-3 py-1 rounded-3xl hover:cursor-pointer hover:bg-gray-200  active:bg-gray-300">Lets Talk</button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center gap-6 py-6 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {menulinks.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setOpen(false)}
            className="text-lg hover:text-indigo-400 transition"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

