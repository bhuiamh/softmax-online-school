"use client";
import SectionTitle from "@/components/SectionTitle";
import { polytechnicClassesData } from "@/data/ClassesData";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PolytechnicClasses = () => {
  const [userPresence, setUserPresence] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const defineUser = localStorage.getItem("isUserPresent");
      setUserPresence(defineUser);
    }
  }, []);

  const router = useRouter();
  const [selectedDiv, setSelectedDiv] = useState([]);
  const initialPrice = 0;
  const priceIncrement = 500;

  const handleClick = (divNumber) => {
    if (selectedDiv.includes(divNumber)) {
      setSelectedDiv(selectedDiv.filter((num) => num !== divNumber));
    } else {
      setSelectedDiv([...selectedDiv, divNumber]);
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = initialPrice;
    selectedDiv.forEach((divNumber) => {
      totalPrice += priceIncrement;
    });
    return totalPrice;
  };
  const handleEnroll = async () => {
    if (
      userPresence === "student" ||
      userPresence === "admin" ||
      userPresence === "instructor"
    ) {
      if (userPresence === "student") {
        Swal.fire({
          icon: "success",
          title: "Class Enrolled Successful",
        });
      }
      if (!selectedDiv.length && userPresence === "student") {
        Swal.fire({
          icon: "error",
          title: "Please select semester",
        });
      }
      if (userPresence === "admin" || userPresence === "instructor") {
        Swal.fire({
          icon: "error",
          title: "The class is only for student",
        });
      }
    } else {
      Swal.fire({
        title: "Please Login",
        text: "To enroll the class you have to login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonButtonText: "Yes, Login",
        cancelButtonButtonText: "Cancel",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login");
        }
      });
    }
  };
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto p-6 md:p-10 ">
        <SectionTitle
          title={"Polytechnic Power-Ups"}
          subTitle={
            "Elevate Your Academic Journey with Our Dynamic Polytechnic Classes"
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-">
          {polytechnicClassesData.map((polytechnicData, index) => (
            <div
              key={index}
              className="card card-side bg-base-100 shadow-xl hover:shadow-2xl duration-300"
            >
              <figure>
                <img
                  className="h-full w-72"
                  src={polytechnicData.img}
                  alt={polytechnicData.name}
                />
              </figure>
              <div className="p-5">
                <h2 className="text-base md:text-xl font-bold text-green-700">
                  {polytechnicData.name}
                </h2>
                <div className="mx-auto">
                  <h1 className="text-base font-bold mb-4 text-gray-900">
                    Choose the Semester You Want to Purchase
                  </h1>
                  <div className="grid grid-cols-4 lg:grid-cols-7 gap-1">
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <div
                        key={num}
                        onClick={() => handleClick(num)}
                        className={`border-green-700 border-2 p-2 mx-auto cursor-pointer h-10 w-10 rounded-md justify-center flex ${
                          selectedDiv.includes(num) ? "bg-green-700" : ""
                        }`}
                      >
                        <p className="font-semibold">
                          {num === 1
                            ? "1"
                            : num === 2
                            ? "2"
                            : num === 3
                            ? "3"
                            : `${num}`}{" "}
                        </p>
                        <p className="font-semibold text-[8px]">
                          {num === 1
                            ? "st"
                            : num === 2
                            ? "nd"
                            : num === 3
                            ? "rd"
                            : `th`}{" "}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 md:mt-8">
                    <p className="text-xl font-semibold text-gray-900">
                      Total Price:{" "}
                      <span className="text-green-700">
                        ৳ {calculateTotalPrice()}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="card-actions justify-end mt-2">
                  <button
                    onClick={handleEnroll}
                    className=" relative inline-block text-lg group"
                  >
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-green-700 transition-colors duration-300 ease-out border-2 border-green-700 rounded-lg group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
                      <span className="absolute left-0 w-[270px] h-[270px] -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-green-700 group-hover:-rotate-180 ease"></span>
                      <span className="relative"> Enroll Now</span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-green-700 rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PolytechnicClasses;
