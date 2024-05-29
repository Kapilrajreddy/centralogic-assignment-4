import React from "react";
import {
 
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { RiDownloadCloudLine } from "react-icons/ri";
const Media = () => {
  return (
    <div className="flex flex-col mdl:flex-row mdl:items-end gap-6 lgl:gap-0 justify-between">
      <div className="sm:flex flex-col items-center">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/kapilrajreddy/" target="display">
            <span className="bannerIcon hover:shadow-shadowTwo">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://www.instagram.com/kapirajreddy" target="display">
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
      {/* <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div> 
      </div>*/}
      <div className="flex justify-center">
        <a
          className="w-full max-w-max px-4 bannerIcon shadow-shadowTwo text-designColor font-bold flex items-center gap-2"
          href="https://drive.google.com/file/d/15e3GUXxdyW3dKVtARqJecarNV8nB3AjH/view?usp=sharing"
          target="display"
        >
          <RiDownloadCloudLine /> Resume
        </a>
      </div>
    </div>
  );
};

export default Media;
