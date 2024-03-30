import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assests/logo_med2.png";
import { AiOutlineArrowRight } from "react-icons/ai";

function Header(props) {
  const loadcontent = props.load;

  return (
    <div className="flex justify-between p-10 cursor-pointer">
      <a href="/">
        {" "}
        <img src={Logo} alt="logo" />
      </a>
      {/* Right  */}
      <div className="flex gap-10 text-white">
        <p id="home" className="active hover:">
          <Link to="/" onClick={loadcontent}>
            Home
          </Link>
        </p>
        <p id="about">
          <Link to="/test" onClick={loadcontent}>
            Products
          </Link>
        </p>
        <p id="donate">
          <Link to="/donate" onClick={loadcontent}>
            Donation
          </Link>
        </p>
        <div className="bg-[#cfecea]  shadow-lg shadow-green-700/60 text-base text-black font-normal rounded-full h-10 pt-2 w-32 text-center cursor-pointer">
          <p className="flex items-center justify-center gap-3">
            Sell/Rent
            <span className="bg-white/20 p-1 rounded-full">
              <Link onClick={loadcontent} to="/sell-form">
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
