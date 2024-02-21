"use client";
import React, { useState } from "react";
import Link from "next/link"; // For Details button navigation
import { classesData } from "@/data/ClassesData";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlineSentimentSatisfiedAlt } from "react-icons/md";
import SectionTitle from "@/components/SectionTitle";

const ClassCard = () => {
  const [expandedDescription, setExpandedDescription] = useState({});

  const toggleDescription = (index) => {
    setExpandedDescription((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto p-6 md:p-10 ">
        <SectionTitle
          title={"Explore Our Classes."}
          subTitle={
            "Discover diverse classes aligned with your interests and aspirations."
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {classesData.map((data, index) => (
            <div
              key={index}
              className="bg-white/90 hover:bg-white duration-300 rounded-lg shadow-md hover:shadow-xl transition-all pb-16 relative md:hover:scale-[1.01]"
            >
              <img
                src={data.imagePath}
                alt={data.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="px-4 py-2">
                <h3 className="text-base md:text-xl font-bold text-green-500 mb-1">
                  {data.title}
                </h3>
                <p className="text-[14px] font-semibold text-gray-900">
                  {data.tagline}
                </p>

                <p className="text-gray-800 mb-4" title={data.description}>
                  {expandedDescription[index]
                    ? data.description
                    : data.description.substring(0, 100) + "..."}
                  {!expandedDescription[index] && (
                    <button
                      className="text-green-500 hover:text-green-700 focus:outline-none ml-1"
                      onClick={() => toggleDescription(index)}
                    >
                      Show More
                    </button>
                  )}
                </p>

                <div className="flex justify-between">
                  {data.price > 0 && (
                    <div className="flex items-center font-bold">
                      <span className="text-green-500 text-base md:text-2xl">
                        <span className="text-gray-900"> ৳</span>{" "}
                        {data.price.toLocaleString()}
                        {` `}
                        {data.discount > 0 && (
                          <span className="line-through text-red-500 font-normal text-[14px] md:text-base mr-2">
                            {data.price + data.discount}
                          </span>
                        )}
                      </span>
                    </div>
                  )}
                  <div className="text-green-500 text-base md:text-2xl flex items-center font-bold">
                    <span className="text-gray-900 text-3xl">
                      <PiStudentFill />
                    </span>{" "}
                    {data.enrolled}+{" "}
                  </div>
                  <div className="text-green-500 text-base md:text-2xl flex items-center font-bold">
                    <MdOutlineSentimentSatisfiedAlt className="text-gray-900 text-3xl" />{" "}
                    {data.satisfactionRate}%
                  </div>
                  {data.progress && (
                    <div className="text-gray-500">
                      Progress: {data.progress}%
                    </div>
                  )}
                </div>

                <Link
                  href={data.detailsLink}
                  className="absolute bottom-2 right-5"
                >
                  <h1 className="mt-6 relative inline-block text-lg group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-green-500 transition-colors duration-300 ease-out border-2 border-green-500 rounded-lg group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
                      <span className="absolute left-0 w-[270px] h-[270px] -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-green-500 group-hover:-rotate-180 ease"></span>
                      <span className="relative"> Details</span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-green-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </h1>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
