"use client";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", "<<<<<<<<<<<<<summitted");
  };
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto p-6 md:p-10 ">
        <SectionTitle
          title={"Contact Us"}
          subTitle={"Feel free to send us a message"}
        />
        <div>
          <form onSubmit={handleFormSubmit} className="mx-auto max-w-xl">
            <div className="grid grid-cols-1">
              <div className="grid grid-cols-2 w-full gap-6">
                <input
                  required
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="First Name *"
                  className="w-full px-3.5 py-2 text-black font-semibold placeholder-gray-300 sm:text-sm sm:leading-6 border-b-2 border-green-500 focus:outline-none focus:border-b-2 focus:border-green-500 focus:scale-105 duration-300"
                />
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Last Name"
                  className="w-full px-3.5 py-2 text-black font-semibold placeholder-gray-300 sm:text-sm sm:leading-6 border-b-2 border-green-500 focus:outline-none focus:border-b-2 focus:border-green-500 focus:scale-105 duration-300"
                />
              </div>

              <div className="mt-2">
                <input
                  required
                  type="text"
                  name="polytechnic"
                  id="company"
                  placeholder="Polytechnic Institute Name *"
                  className="w-full px-3.5 py-2 text-black font-semibold placeholder-gray-300 sm:text-sm sm:leading-6 border-b-2 border-green-500 focus:outline-none focus:border-b-2 focus:border-green-500 focus:scale-105 duration-300"
                />
              </div>
              <div className="mt-2 grid grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-3.5 py-2 text-black font-semibold placeholder-gray-300 sm:text-sm sm:leading-6 border-b-2 border-green-500 focus:outline-none focus:border-b-2 focus:border-green-500 focus:scale-105 duration-300"
                />

                <input
                  required
                  type="number"
                  name="phone-number"
                  id="phone-number"
                  placeholder="Phone Number *"
                  className="w-full px-3.5 py-2 text-black font-semibold placeholder-gray-300 sm:text-sm sm:leading-6 border-b-2 border-green-500 focus:outline-none focus:border-b-2 focus:border-green-500 focus:scale-105 duration-300"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-6">
                <select
                  id="technology"
                  name="technology"
                  className="w-full px-3.5 py-2 text-black font-semibold placeholder-gray-300 sm:text-sm sm:leading-6 border-b-2 border-green-500 focus:outline-none focus:border-b-2 focus:border-green-500"
                >
                  <option>Select Your Department</option>
                  <option>Electrical Technology</option>
                  <option>Electronics Technology</option>
                  <option>Civil Technology</option>
                  <option>Mechanical Technology</option>
                  <option>Computer Technology</option>
                  <option>Power Technology</option>
                  <option>Textile Technology</option>
                  <option>Electrochemical Technology</option>
                  <option>Food Technology</option>
                  <option>RAC Technology</option>
                  <option>Others</option>
                </select>
                <select
                  id="query-for"
                  name="query-for"
                  className="w-full px-3.5 py-2 text-black font-semibold placeholder-gray-300 sm:text-sm sm:leading-6 border-b-2 border-green-500 focus:outline-none focus:border-b-2 focus:border-green-500"
                >
                  <option>Who are you</option>
                  <option>Polytechnic Student</option>
                  <option>DUET Admission Candidate</option>
                  <option>Job Preparation Candidate</option>
                  <option>Others</option>
                </select>
              </div>

              <div className="mt-2">
                <textarea
                  required
                  name="message"
                  id="message"
                  rows={4}
                  placeholder="Type Your Message Here"
                  className="w-full px-3.5 py-2 text-black font-semibold placeholder-gray-300 sm:text-sm sm:leading-6 border-b-2 border-green-500 focus:outline-none focus:border-b-2 focus:border-green-500 focus:scale-105 duration-300"
                  defaultValue={""}
                />
              </div>

              <div className="mt-10">
                <input
                  type="submit"
                  className="w-full rounded-md bg-transparent px-3.5 py-2.5 text-center text-sm font-semibold text-green-500 shadow-sm hover:bg-green-500 hover:text-white border-2 border-green-500 duration-500"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
