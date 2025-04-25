import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["home", "about", "projects", "skills", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0d0d0d]/80 px-6 md:px-20 py-4 flex justify-between items-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-2xl font-bold text-teal-400">manas.dev</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10 text-white text-sm uppercase tracking-widest">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="text-teal-400"
              className="cursor-pointer hover:text-teal-300 transition-colors"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden text-white z-50" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          className="absolute top-0 left-0 w-full h-screen bg-[#0d0d0d] flex flex-col justify-center items-center space-y-10 text-white text-2xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-teal-400"
                className="cursor-pointer hover:text-teal-300 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
