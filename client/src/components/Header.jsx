import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assests/logo_med1.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

function Header(props) {
  const loadcontent = props.load;

  return (
    <div className="flex justify-between p-10 ">
      <img src={Logo} alt="logo" />
      {/* Right  */}
      <div className="flex gap-10 text-white">
        <p id="home" className="active">
          <Link to="/" onClick={loadcontent}>
            Home
          </Link>
        </p>
        <p id="about">
          <Link to="/about" onClick={loadcontent}>
            Services
          </Link>
        </p>
        <p id="contact">
          <Link to="/contact" onClick={loadcontent}>
            Contact Us
          </Link>{" "}
        </p>
        <div className="bg-[#cfecea]  shadow-lg shadow-green-700/60 text-base text-black font-normal rounded-full h-10 pt-2 w-32 text-center">
          <p className="flex items-center justify-center gap-3">
            Sell Now
            <span className="bg-white/20 p-1 rounded-full">
              <Link onClick={loadcontent} to="/contact">
                <AiOutlineArrowRight />
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
