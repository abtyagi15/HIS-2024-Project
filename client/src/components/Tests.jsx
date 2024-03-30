import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
export default function Tests(props) {
  const loadcontent = props.load;
  return (
    <div className="px-5 py-5 flex flex-wrap flex-col container">
      <h1 className="text-6xl font-bold text-white">Products</h1>
      <div
        id="test-container"
        className="container mt-5 p-3  rounded-t-3xl flex flex-wrap flex-row"
      >
        <div className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md">
          <Link onClick={loadcontent} to="/about">
            <img
              className=" rounded-t-lg"
              src="https://rukminim2.flixcart.com/image/850/1000/kgmla4w0/pulse-oximeter/y/k/r/sahyog-wellness-led-type-fingertip-pulse-oximeter-big-digit-led-original-imafwtrb2dzhnujf.jpeg?q=20&crop=false"
              alt=""
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              WheelChair
            </h5>
          </div>
        </div>
        <div className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md">
          <Link onClick={loadcontent} to="/about">
            <img
              className="rounded-t-lg"
              src="https://m.media-amazon.com/images/I/51agpgQn4AL.jpg"
              alt=""
            />
          </Link>
          <div className="p-5 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pathology
            </h5>
          </div>
        </div>
        <div className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md ">
          <Link onClick={loadcontent} to="/about">
            <img
              className="rounded-t-lg"
              src="https://aeoncare.in/cdn/shop/products/WalkingFramePremiumdynaatbestpriceinIndia.jpg?v=1642661974"
              alt=""
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Electrocardiogram
            </h5>
          </div>
        </div>
      </div>
      <div
        id="test-container"
        className="container mt-5 p-3  rounded-t-3xl flex flex-wrap flex-row"
      >
        <div className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md">
          <Link onClick={loadcontent} to="/about">
            <img
              className="rounded-t-lg"
              src="https://m.media-amazon.com/images/I/51HFj13aktL._AC_UF1000,1000_QL80_.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Radiology
            </h5>
          </div>
        </div>
        <div className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md">
          <Link onClick={loadcontent} to="/about">
            <img
              className="rounded-t-lg"
              src="https://t4.ftcdn.net/jpg/02/89/11/17/360_F_289111791_j0ZsFCafoM4n47Pj6Nf1fVzC5OKXYtr7.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pathology
            </h5>
          </div>
        </div>
        <div className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md">
          <Link onClick={loadcontent} to="/about">
            <img
              className="rounded-t-lg"
              src="https://5.imimg.com/data5/GX/HI/MY-15598585/digital-bp-apparatus.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Electrocardiogram
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
