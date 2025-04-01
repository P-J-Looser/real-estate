import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import logo from "../assets/frontend_assets/logo.jpg"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full bg-white ${
          menuOpen ? "" : "shadow-md"
        } md:shadow-md fixed top-0 left-0 z-50`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Left - Logo */}
          <Link to="/" className="text-2xl font-bold">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>

          {/* Middle - Navigation Links (Hidden on Small Screens) */}
          <ul className="hidden md:flex space-x-6 text-gray-700">
            <li>
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/properties" className="hover:text-blue-500">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-blue-500">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Right - Contact Button (Hidden on Small Screens) */}
          <Link
            to="/contact"
            className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Reach Us
          </Link>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoIosCloseCircleOutline /> : <BiMenuAltRight />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Animated Below Navbar) */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{
          y: menuOpen ? 0 : "-100%",
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{
          duration: menuOpen ? 0.3 : 0.6, // Longer duration when closing
          ease: "easeInOut",
        }}
        className={`md:hidden bg-white ${
          menuOpen ? "shadow-md" : ""
        } fixed top-[4rem] left-0 w-full flex flex-col items-center space-y-4 py-6 z-40 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="hover:text-blue-500"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/properties"
          className="hover:text-blue-500"
          onClick={() => setMenuOpen(false)}
        >
          Properties
        </Link>
        <Link
          to="/about"
          className="hover:text-blue-500"
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/gallery"
          className="hover:text-blue-500"
          onClick={() => setMenuOpen(false)}
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </Link>
      </motion.div>
    </>
  );
};

export default Navbar;
