"use client";
import React from "react";

const ProfileCard = () => {
  // const userPresence = localStorage.getItem("isUserPresent");
  const userPresence = "student";

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <div className="text-center uppercase text-green-700 text-2xl font-bold mb-6">
        {userPresence} Information
      </div>

      <div className="grid grid-cols-2 gap-6 items-center mb-4">
        <div>
          <img
            className="md:w-36 w-24 h-24 md:h-36 rounded"
            src="/logo/user.jpg"
            alt={userPresence}
          />{" "}
        </div>
        <div>
          <h1 className="text-xl font-bold">
            <span className="uppercase">{userPresence}</span> Name
          </h1>
          <p className="text-gray-600">{userPresence}@softmax.com</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 items-center mb-4">
        <div className="">
          <p className="font-semibold">Phone Number:</p>
          <p>01819831933</p>
        </div>
        <div>
          <p className="font-semibold">Date of Birth:</p>
          <p>6 January, 2001</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 items-center mb-4">
        <div>
          <p className="font-semibold">Gender:</p>
          <p>Male</p>
        </div>
        <div>
          <p className="font-semibold">Address:</p>
          <p>Road#10, Mirpur#1, Dhaka-1216</p>
        </div>
      </div>
      <div className="flex justify-end items-center space-x-3">
        <button className="hover:bg-green-700 bg-white hover:text-white text-green-700 font-semibold border-2 border-green-700 px-4 py-2 rounded duration-700">
          Edit
        </button>
        <button className="hover:bg-white bg-green-700 hover:text-green-700 text-white font-semibold border-2 border-green-700 px-4 py-2 rounded duration-300">
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
