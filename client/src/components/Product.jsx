import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function Tests(props) {
  // const [showMore, setShowMore] = useState(false);
  const loadcontent = props.load;

  // const handleShowMore = () => {
  //   setShowMore(true);
  // };

  return (
    <div className="px-5 py-5 flex flex-wrap flex-col container">
      <h1 className="text-6xl font-bold text-white">Products</h1>
      <div
        id="test-container"
        className="container mt-5 p-3  rounded-t-3xl inline-flex flex-wrap flex-row"
      >
        <div
          className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105
         rounded-lg shadow-md"
        >
          <Link onClick={loadcontent} to="/product/wheelchair">
            <img
              className=" w-96 h-64 object-cover rounded-t-lg transition duration-300 transform "
              src="https://www.standardhealthcare.in/wp-content/uploads/2018/07/Wheel-Chair-Standing.jpg"
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
          <Link onClick={loadcontent} to="/product/crutches">
            <img
              className=" w-96 h-64 object-cover rounded-t-lg"
              src="https://www.shhc.com.au/assets/thumbL/P-12173.jpg?20211021070924"
              alt=""
            />
          </Link>
          <div className="p-5 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Crutches
            </h5>
          </div>
        </div>
        <div className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md ">
          <Link onClick={loadcontent} to="/product/walker">
            <img
              className=" w-96 h-64 object-cover rounded-t-lg"
              src="https://cdn.moglix.com/p/iaEygUINhTTCm-xxlarge.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Walker Frame
            </h5>
          </div>
        </div>
      </div>
      <div
        id="test-container"
        className="container mt-5 p-3  rounded-t-3xl flex flex-wrap flex-row"
      >
        <div className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md">
          <Link onClick={loadcontent} to="/product/oximeter">
            <img
              className=" w-96 h-64 object-cover rounded-t-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgkbdJqZm_6pVTJ_cN81aBdsVYm_fE_PHdcg&usqp=CAU"
              alt=""
            />
          </Link>
          <Link to="/product/oximeter">
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Oximeter
              </h5>
            </div>
          </Link>
        </div>
        <div className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md">
          <Link onClick={loadcontent} to="/product/hospital-beds">
            <img
              className=" w-96 h-64 object-cover rounded-t-lg"
              src="https://cdn.moglix.com/p/D5yn6qSBgd7kT-xxlarge.jpg"
              alt=""
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hospital Bed
            </h5>
          </div>
        </div>
        <div className="bg-gradient-to-r mt-14 from-teal-300 via-green-100 to-white max-w-sm m-2 bg-white hover:scale-105  rounded-lg shadow-md">
          <Link onClick={loadcontent} to="/product/commode">
            <img
              className=" w-96 h-64 object-cover rounded-t-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbT6KcxbAfyABO4XSGxk-KSA5dNNMrVMlUZw&usqp=CAU"
              alt=""
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Commode
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
