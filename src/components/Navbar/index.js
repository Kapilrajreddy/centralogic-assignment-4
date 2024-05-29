import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 ml-4 rounded-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4PezKyH7dypGgOO1K8LDg9_f4FP9GDI6mdg&s"
            alt="logo"
            className="w-full rounded-full"
          />
        </div>
        <h1 className="text-base font-bold text-designColor tracking-wide cursor-pointer  duration-300">
          Portfolio
        </h1>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 lg:mr-4">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-200 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <div className="w-10 h-10">
                  <img
                    className="w-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4PezKyH7dypGgOO1K8LDg9_f4FP9GDI6mdg&s"
                    alt="logo"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  I am a Full Stack Developer with 1 year of Experience. I have
                  worked on 3 projects.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/kapilrajreddy/"
                    target="display"
                  >
                    <span className="bannerIcon hover:shadow-shadowTwo">
                      <FaLinkedinIn />
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/kapirajreddy"
                    target="display"
                  >
                    <span className="bannerIcon hover:shadow-shadowTwo">
                      <FaInstagram />
                    </span>
                  </a>
                  <a href="https://github.com/Kapilrajreddy/" target="display">
                    <span className="bannerIcon hover:shadow-shadowTwo">
                      <FaGithub />
                    </span>
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
