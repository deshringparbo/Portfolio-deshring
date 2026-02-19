import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Buttons from "../../elements/Buttons";

const menulinks = [
  { name: "Home", href: "#herosection" },
  { name: "Learning", href: "#learning" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Blogs", href: "#blogs" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white/20 backdrop-blur z-10 text-black fixed">
      {/* Top Bar */}
      <div className="px-6 py-3 flex items-center justify-between  md:px-20 lg:px-52 ">
        {/* Logo */}
        <div className="text-2xl font-bold font-serif">Des.</div>

        {/*  Desktop Menu  */}
        <div className="hidden md:flex gap-8">
          {menulinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-sky-400 transition cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>

        <Buttons name="Let's Talk" />

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0  w-full bg-sky-200 flex flex-col items-center gap-6 py-6 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {menulinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="text-lg hover:text-indigo-400 transition"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
