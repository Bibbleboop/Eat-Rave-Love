import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    scroll.scrollTo(1000, {
      duration: 500,
      delay: 100,
      smooth: "easeInOutQuart",
    });
  };

  const handleClose = () => setNav(false);

  return (
    <div>
      <div className="w-screen h-[120px] z-10 bg-cyan-950 fixed drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <img
              src={require("../logodesign/logo.png")}
              className="w-20 h-20"
              alt="logo"
            />

            <ul className="hidden md:flex text-white text-2xl  cursor-pointer">
              <li>
                <Link to="home" smooth={true} duration={500}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} offset={-200} duration={500}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="fav"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  FAVOURITES
                </Link>
              </li>
              <li>
                <Link
                  to="contact-us"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex pr-4">
          </div>
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          </div>
        </div>

        <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link onClick={handleClose} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              onClick={handleClose}
              to="about"
              smooth={true}
              offset={-200}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              onClick={handleClose}
              to="footer"
              smooth={true}
              offset={-100}
              duration={500}
            >
              Footer
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              onClick={handleClose}
              to="contactUs"
              smooth={true}
              offset={-50}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
