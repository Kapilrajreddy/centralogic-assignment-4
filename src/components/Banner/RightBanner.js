import React from "react";


const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-full z-10"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4PezKyH7dypGgOO1K8LDg9_f4FP9GDI6mdg&s"
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
