import forhadImage from "../assets/forhad-eclip.png";
import SocialMedia from "./SocialMedia";
import hiFive from "../assets/hi.svg";
import softwareEngineering from "../assets/se.svg";
import humanComputer from "../assets/hci.svg";
import uiUx from "../assets/uiux.svg";

const Hero = () => {
  return (
    <div className=" relative flex items-end justify-between max-w-[1280px] max-h-[860] mx-auto">
      {/* Circles */}
      <div className="absolute top-[400px] left-[5px]">
        <svg
          width="150"
          height="150"
          viewBox="0 0 604 604"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="302" cy="302" r="302" fill="url(#paint0_linear_28_88)" />
          <defs>
            <linearGradient
              id="paint0_linear_28_88"
              x1="-3.93017e-06"
              y1="325.509"
              x2="604"
              y2="312.489"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D7DFE7" stopOpacity="0.06" />
              <stop offset="1" stopColor="#D7DFE7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute top-[100px] right-[40px]">
        <svg
          width="100"
          height="100"
          viewBox="0 0 604 604"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="302" cy="302" r="302" fill="url(#paint0_linear_28_88)" />
          <defs>
            <linearGradient
              id="paint0_linear_28_88"
              x1="-3.93017e-06"
              y1="325.509"
              x2="604"
              y2="312.489"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D7DFE7" stopOpacity="0.06" />
              <stop offset="1" stopColor="#D7DFE7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[80px] w-[150px] ">
        <svg
          width="141"
          height="85"
          viewBox="0 0 141 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="70.5"
            cy="70.5"
            r="70.5"
            fill="url(#paint0_linear_61_55)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_61_55"
              x1="-9.17473e-07"
              y1="75.988"
              x2="141"
              y2="72.9485"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D7DFE7" stopOpacity="0.1" />
              <stop offset="1" stopColor="#D7DFE7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Image */}
      <div className="absolute top-[200px] left-[5px] transform translate-x-[10px] translate-y-[-10px] animate-float">
        <img src={hiFive} alt="hifive" />
      </div>
      <div className="absolute top-[20px] right-[300px] transform translate-x-[10px] translate-y-[-10px] animate-float">
        <img src={softwareEngineering} alt="softwareEngineering" />
      </div>
      <div className="absolute top-[200px] right-[50px] transform translate-x-[10px] translate-y-[-10px] animate-float">
        <img src={humanComputer} alt="humanComputer" />
      </div>
      <div className="absolute right-[300px] bottom-10 transform translate-x-[10px] translate-y-[-10px] animate-float">
        <img src={uiUx} alt="uiUx" />
      </div>

      {/* Social Media Icons */}
      <div className="mb-12">
        <SocialMedia />
      </div>
      {/* Center Image */}
      <img
        src={forhadImage}
        alt="forhad"
        className="max-w-[600px] h-[810px] object-cover"
      />
      {/* Footer Text */}
      <div className="flex flex-col items-end text-right mb-12">
        <div className="flex gap-2">
          <h1>©</h1>
          <h1>2025</h1>
          <h2 className="font-bold text-[#FA4961]">FORHAD</h2>
        </div>
        <h1>ALL RIGHTS RESERVED</h1>
      </div>
    </div>
  );
};

export default Hero;
