import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./img/About";
import Main from "./main";
import Booking from "./img/Book";
import Footer from "./components/Footer";
// import Contact from "./img/contact";
import Error from "./img/error";
import Header from "./components/Header";
import Donate from "./components/Donate";
import ProgressBar from "@badrap/bar-of-progress";
import { Offline, Online } from "react-detect-offline";
import Product from "./components/Product";
import Register from "./img/Register";
import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import ResetPassword from "./img/ResetPassword";
import VerifyEmail from "./img/VerifyEmail";
import DonationForm from "./Forms/donorForm";
import Login from "./img/Login";
import FindLocation from "./utils/FindLocation";
import SellRent from "./Forms/sellForm";
import WheelChair from "./components/products/WheelChair";
import Oximeter from "./components/products/Oximeter";
import Crutches from "./components/products/Cruthches";
import Commode from "./components/products/Commode";
import Walker from "./components/products/Walker";

function App() {
  const progress = new ProgressBar();
  progress.start();
  setTimeout(() => {
    progress.finish();
  }, 300);
  setTimeout(() => {
    let location = window.location.pathname;
    let home = document.getElementById("home");
    let about = document.getElementById("about");
    if (location === "/about") {
      about.classList.remove("passive");

      home.classList.add("passive");

      about.classList.add("active");
    } else if (location === "/book") {
      about.classList.add("passive");
      home.classList.add("passive");
    } else {
      home.classList.remove("passive");
      about.classList.add("passive");

      home.classList.add("active");
    }
  }, 1);
  const loadcontent = () => {
    progress.start();
    setTimeout(() => {
      progress.finish();
    }, 300);
    setTimeout(() => {
      let location = window.location.pathname;
      let home = document.getElementById("home");
      let about = document.getElementById("about");
      if (home && about) {
        if (location === "/about") {
          about.classList.remove("passive");

          home.classList.add("passive");

          about.classList.add("active");
        } else if (location === "/book") {
          about.classList.add("passive");
          home.classList.add("passive");
        } else {
          home.classList.remove("passive");
          about.classList.add("passive");

          home.classList.add("active");
        }
      }
    }, 1);
  };

  return (
    <>
      <Online>
        <div className="max-w-7xl  mx-auto">
          <Header load={loadcontent} />
          <Routes>
            <Route exact path="/location" element={<FindLocation />} />
            <Route exact path="/" element={<Main load={loadcontent} />} />
            <Route
              path="/about"
              element={
                <PrivateRoute>
                  <About />
                </PrivateRoute>
              }
            />

            <Route
              path="/product/wheelchair"
              element={
                <PrivateRoute>
                  <WheelChair />
                </PrivateRoute>
              }
            />
            <Route
              path="/product/oximeter"
              element={
                <PrivateRoute>
                  <Oximeter />
                </PrivateRoute>
              }
            />
            <Route
              path="/product/crutches"
              element={
                <PrivateRoute>
                  <Crutches />
                </PrivateRoute>
              }
            />
            <Route
              path="/product/commode"
              element={
                <PrivateRoute>
                  <Commode />
                </PrivateRoute>
              }
            />
            <Route
              path="/product/walker"
              element={
                <PrivateRoute>
                  <Walker />
                </PrivateRoute>
              }
            />
            <Route
              path="/book"
              element={
                <PrivateRoute>
                  <Booking />
                </PrivateRoute>
              }
            />
            <Route
              path="/products"
              element={
                <PrivateRoute>
                  <Product />
                </PrivateRoute>
              }
            />
            <Route
              path="/donate"
              element={
                <PrivateRoute>
                  <Donate />
                </PrivateRoute>
              }
            />
            <Route
              path="/donation-form"
              element={
                <PrivateRoute>
                  <DonationForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <OpenRoute>
                  <Login />
                </OpenRoute>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <OpenRoute>
                  <ResetPassword />
                </OpenRoute>
              }
            />
            <Route
              path="/register"
              element={
                <OpenRoute>
                  <Register />
                </OpenRoute>
              }
            />
            <Route
              path="/verify-email"
              element={
                <OpenRoute>
                  <VerifyEmail />
                </OpenRoute>
              }
            />
            <Route
              path="/sell-form"
              element={
                <PrivateRoute>
                  <SellRent />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Online>
      <Offline>
        <Error />
      </Offline>
    </>
  );
}

export default App;
