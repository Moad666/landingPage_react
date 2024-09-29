import React from "react";
import logowhite from "../images/logowhite.png";
import './Navbar.css';
import { FaWhatsapp, FaDiscord, FaEnvelope } from "react-icons/fa";


function Navbar() {
  return (
    <div className="flex items-center justify-between text-white bg-customPurple">
      {/* Left: Logo */}
      <div className="flex items-center">
        <button>
          <img src={logowhite} width={100} height={100} alt="logo" />
        </button>
      </div>

      {/* Center: Icons */}
      <div className="flex items-center space-x-6">
        {/* WhatsApp */}
        <a
          href="https://wa.me/212630487121"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
        >
          <FaWhatsapp size={30} />
        </a>

        {/* Discord */}
        <a
          href="https://discordapp.com/users/Meo_666"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaDiscord size={30} />
        </a>

        {/* Email */}
        <a
          href="mailto:moadelotmani666@gmail.com"
          className="hover:text-red-500"
        >
          <FaEnvelope size={30} />
        </a>
      </div>

      {/* Optional Right Section: Can be left empty or add more */}
      <div></div>
    </div>
  );
}
export default Navbar;
