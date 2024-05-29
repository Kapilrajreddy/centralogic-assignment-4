import { FaLinkedinIn, FaInstagram, FaGithub, FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="text-3xl md:text-4xl text-gray-300 font-bold capitalize mb-4 mt-4">
        Contact Me
      </h1>

      <div className="flex flex-col mdl:flex-row mdl:items-end gap-6 lgl:gap-0 justify-between border-b-[1px] font-titleFont border-b-black pb-4">
        <div className="sm:flex flex-col items-center md:flex-row justify-between gap-2 w-full">
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/kapilrajreddy/"
              target="display"
            >
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
          <div>
            <p className="text-gray-100 font-medium text-sm flex items-center gap-1">
              <span>
                <FaPhoneSquareAlt />
              </span>
              : 7995345826
            </p>
            <p className="text-gray-100 font-medium text-sm flex items-center gap-1">
              <span>
                <IoMdMail/>
              </span>
              : kapilrajreddy@gmail.com
            </p>
          </div>
        </div>
      </div>
      <p className="text-center mt-4">2024 @copyrights kapil</p>
    </div>
  );
};
export default Contact
