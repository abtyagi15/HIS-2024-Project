import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 mt-5 bg-opacity-20 bg-white rounded-lg shadow md:px-6 md:py-8">
      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <span className="block text-sm  sm:text-center text-white">
        Empowering possibilities, one click at a time. © 2024{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Innovate4All
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
