import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="py-8 px-4 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
        Page Coming Soon!
      </h2>

      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl  font-extrabold mx-auto mb-4 text-gray-900">
          Page is Under Construction
        </h1>

        <h3 className="text-xl font-semibold text-green-700">
          Stay tuned for exciting updates!
        </h3>

        <div className="flex justify-center items-center space-x-3 mt-4">
          <Link
            href="/"
            className="hover:bg-green-700 bg-white hover:text-white text-green-700 font-semibold border-2 border-green-700 px-4 py-2 rounded duration-700"
          >
            Home
          </Link>
          <Link
            href="/contact-us"
            className="hover:bg-white bg-green-700 hover:text-green-700 text-white font-semibold border-2 border-green-700 px-4 py-2 rounded duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
