import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  FcVoicePresentation,
  FcInspection,
  FcApproval,
  FcDataProtection,
} from "react-icons/fc";
const LargeCard = (props) => {
  const loadcontent = props.load;
  return (
    <div className="px-5 py-5">
      {/* <h1 className="text-[#cfecea] px-5 ">M</h1> */}
      <div className="flex head-1 justify-between py-5">
        <div className="text-6xl font-semibold text-white">
          <p>
            UNLOCKING <span className="font-bold">CARE</span>
          </p>
          <p>ON DEMAND</p>
          <p>
            <span className="font-bold">WITH</span>{" "}
            <span className="font-bold">MEDLEASE</span>
          </p>
          <div className="text-base mt-5 font-normal text-white">
            <p>A New and Efficient way of helping people</p>
            <p>and saving lives.</p>
          </div>
          <div className="bg-[#cfecea] w-fit px-5 py-3 shadow-lg shadow-green-700/60 text-base cursor-pointer text-black font-medium rounded-full mt-5">
            <p className="flex items-center justify-center gap-3">
              Buy Now
              <span className="bg-white/20 p-1 rounded-full">
                <Link onClick={loadcontent} to="/test">
                  <AiOutlineArrowRight />
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="relative ">
          <div className="bg-gradient-to-tr from-green-400 to-green-200 py-5 rounded-r-lg rounded-tl-full">
            <img
              className="w-96 scale-125 object-contain banner rounded-md"
              alt="Hospital"
              src="https://img.freepik.com/free-vector/health-professional-team_52683-36023.jpg?w=2000"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white rounded-t-3xl flex p-6 justify-between flex-wrap flex-row">
        <div className="flex justify-center p-3 items-center">
          <FcVoicePresentation className="h-20 w-20 bg-white rounded-2xl mr-2 brightness-110" />
          <div className="flex flex-col">
            <p className="text-black font-semibold">24/7</p>
            <p className="text-sm text-black">Online Support available </p>
            <p className="text-sm text-black">at almost any time</p>
          </div>
        </div>

        <div className="p-3 flex justify-center items-center">
          <FcInspection className="h-20 w-20 bg-white rounded-2xl mr-2 brightness-110" />
          <div className="flex flex-col">
            <p className="text-black font-semibold">Online Booking</p>
            <p className="text-sm text-black">Book your appointment from </p>
            <p className="text-sm text-black">anywhere with just one click</p>
          </div>
        </div>
        <div className="p-3 flex justify-center items-center">
          <FcApproval className="h-20 w-20 bg-white rounded-2xl mr-2 brightness-110" />
          <div className="flex flex-col">
            <p className="text-black font-semibold">Fast Report</p>
            <p className="text-sm text-black">Check your health</p>
            <p className="text-sm text-black">within few minutes</p>
          </div>
        </div>
        <div className="p-3 flex justify-center items-center">
          <FcDataProtection className="h-20 w-20 bg-white rounded-2xl mr-2 brightness-110" />
          <div className="flex flex-col">
            <p className="text-black font-semibold">Trusted and Secure</p>
            <p className="text-sm text-black">Our team makes sure a Highly</p>
            <p className="text-sm text-black">
              {" "}
              Tested and Secured Environment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
