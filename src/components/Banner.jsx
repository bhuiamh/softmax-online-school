import React from "react";
import { FaCheck, FaEnvelope } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full py-24 md:py-32 z-10">
      <div className="max-w-screen-xl mx-auto p-6 md:p-10 ">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-green-500 mb-2 md:mb-4 text-center">
            Welcome to Softmax Online School
          </h1>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-6 md:mb-10 text-center">
            Level Up Your Skills with Softmax
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-green-500 p-6 rounded hover:scale-105 duration-500">
            <h1 className="text-2xl font-bold lg:text-3xl flex items-center">
              <FaCheck className="mr-2" /> Pass DUET Entrance Exam!
            </h1>
            <p className="text-lg font-medium text-green-500">
              Ace Physics, Chemistry, Math, & English
            </p>
            <p>
              Want your dream engineering future? This course helps you ace the
              DUET entrance exam! Learn everything you need, from what you can
              take to mastering tough subjects. Expert teachers show you proven
              tricks and tips to manage your time and answer practice questions
              like a pro. Write a killer application and rock your interview -
              stand out and get into DUET!
            </p>
          </div>

          {/* Academic Course */}
          <div className="border-2 border-green-500 p-6 rounded hover:scale-105 duration-500">
            <h1 className="text-2xl font-bold lg:text-3xl flex items-center">
              <FaCheck className="mr-2" /> Become a Polytechnic Star!
            </h1>
            <p className=" text-lg font-medium text-green-500">
              Get better grades in Engineering Studies
            </p>
            <p>
              Want to be top of your class? This course helps you understand
              even the trickiest engineering subjects! Get clear explanations of
              complex things and learn practical ways to solve problems. Take
              good notes, ace exams, and stay ahead of the curve - prepare for
              higher studies with confidence and enjoy your Polytechnic journey!
            </p>
          </div>

          {/* Job Preparation */}
          <div className="border-2 border-green-500 p-6 rounded hover:scale-105 duration-500">
            <h1 className="text-2xl font-bold lg:text-3xl flex items-center">
              <FaCheck className="mr-2" /> Get Dream Engineering Job!
            </h1>
            <p className="text-lg font-medium text-green-500">
              Become an Assistant or Sub-Assistant Engineer
            </p>
            <p className="font-semibold">
              Ready to launch your engineering career? This course gets you
              job-ready for Assistant or Sub-Assistant Engineer positions! Learn
              all about different engineering fields, master interview
              questions, and write impressive resumes and cover letters. Build
              teamwork, communication, and leadership skills to shine in front
              of employers. Land your dream job and start your exciting
              engineering journey!
            </p>
          </div>
          <div className="border-2 border-green-500 p-6 rounded hover:scale-105 duration-500">
            <h1 className="text-2xl font-bold lg:text-3xl flex items-center">
              <FaEnvelope className="mr-2" /> Contact Us
            </h1>
            <p className="text-lg font-medium text-green-500">
              Have Questions? Get in Touch!
            </p>
            <p className="font-semibold">
              Whether you have inquiries about our courses, need assistance, or
              want to explore opportunities, we are here to help! Reach out to
              us for any questions or concerns you may have. Our team is
              dedicated to providing support and guidance to help you succeed in
              your engineering journey.
            </p>
            <a href="#_" class="mt-2 relative inline-block text-lg group">
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-green-500 transition-colors duration-300 ease-out border-2 border-green-500 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-green-500 group-hover:-rotate-180 ease"></span>
                <span class="relative">Contact Now</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-green-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;