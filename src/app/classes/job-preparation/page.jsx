import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-slate-100 p-10">
        <h1 className="text-4xl md:text-8xl font-extrabold text-center w-76 mx-auto">
          <span className="hover:text-green-500 duration-500">4</span>
          <span className="hover:text-green-500 duration-500">0</span>
          <span className="hover:text-green-500 duration-500">4</span>
        </h1>
        <h1 className="text-2xl md:text-4xl font-extrabold text-center ">
          Page is Under Construction
        </h1>

        <div className="text-center space-x-3 mt-4">
          <Link
            href="/"
            className="px-3 py-1 border-2 border-green-500 rounded-md text-green-500 font-bold bg-white hover:bg-green-500 hover:text-white duration-500"
          >
            Home
          </Link>
          <Link
            href="contact-us"
            className="px-3 py-1 border-2 border-green-500 rounded-md text-white font-bold bg-green-500 hover:bg-white hover:text-green-500 duration-500 hover:border-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;