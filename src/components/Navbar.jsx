"use client";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [userPresence, setUserPresence] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const defineUser = localStorage.getItem("isUserPresent");
      setUserPresence(defineUser);
    }
  }, []);

  const [classesOpen, setClassesOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [jobOpen, setJobOpen] = useState(false);
  const [jobMenuOpen, setJobMenuOpen] = useState(false);
  // handle Classes
  const handleOnMouseOver = () => {
    setClassesOpen(true);
  };
  const handleOnMouseOut = () => {
    setTimeout(() => {
      setClassesOpen(false);
    }, 2000);
  };
  const handleOnClick = () => {
    setClassesOpen(!classesOpen);
  };
  const handleOnMouseOverSubMenu = () => {
    setSubMenuOpen(true);
  };
  const handleOutMouseOverSubMenu = () => {
    setSubMenuOpen(false);
  };

  // handle job menu
  const handleOnMouseOverJob = () => {
    setJobOpen(true);
  };

  const handleOnMouseOutJob = () => {
    setTimeout(() => {
      setJobOpen(false);
    }, 2000);
  };
  const handleOnMouseOverJobMenu = () => {
    setJobMenuOpen(true);
  };
  const handleOutMouseOverJobMenu = () => {
    setJobMenuOpen(false);
  };

  // const userPresence = localStorage.getItem("isUserPresent");
  // const userPresence = "student";

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonButtonText: "Yes, log out",
      cancelButtonButtonText: "Cancel",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // localStorage.removeItem("isUserPresent");
        if (typeof window !== "undefined") {
          localStorage.removeItem("isUserPresent");
        }

        Swal.fire({
          icon: "success",
          title: "You have successfully signed out",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      }
    });
  };

  const navOptions = (
    <>
      <Link
        className="font-bold text-base mx-2 font-[lilita one] lg:text-xl text-green-700 hover:text-green-900"
        href="/"
      >
        Home
      </Link>

      <div>
        <Link
          className="font-bold text-base mx-2 font-[lilita one] lg:text-xl text-green-700 hover:text-green-900 relative"
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
          onClick={handleOnClick}
          href="/classes"
        >
          Classes
        </Link>
        {(classesOpen || subMenuOpen) && (
          <div
            onMouseOver={handleOnMouseOverSubMenu}
            onMouseOut={handleOutMouseOverSubMenu}
            className="absolute left-28 lg:left-[42%] top-15 w-48 bg-slate-100 rounded-md shadow-xl hover:shadow-2xl space-y-1 p-4 grid grid-cols-1 items-center justify-center"
          >
            <Link
              className="font-bold text-base  font-[lilita one] text-green-700 hover:text-green-900 bg-transparent hover:bg-transparent"
              href="/classes/polytechnic"
            >
              Polytechnic
            </Link>

            <Link
              className="font-bold text-base font-[lilita one] text-green-700 hover:text-green-900 bg-transparent hover:bg-transparent"
              href="/classes/duet-admission"
            >
              DUET Admission
            </Link>

            <Link
              onMouseOver={handleOnMouseOverJob}
              onMouseOut={handleOnMouseOutJob}
              className="font-bold text-base font-[lilita one] text-green-700 hover:text-green-900 bg-transparent hover:bg-transparent relative"
              href="/"
            >
              Job Preparation
            </Link>
            {(jobOpen || jobMenuOpen) && (
              <div
                onMouseOver={handleOnMouseOverJobMenu}
                onMouseOut={handleOutMouseOverJobMenu}
                className="absolute top-24 w-56 left-8 bg-slate-100 rounded-md shadow-xl hover:shadow-2xl space-y-1 p-4 grid grid-cols-1"
              >
                <Link
                  className="font-bold text-base font-[lilita one] text-green-700 hover:text-green-900 bg-transparent hover:bg-transparent"
                  href="/classes/job-preparation/sae"
                >
                  Sub Assistant Engineer
                </Link>

                <Link
                  className="font-bold text-base font-[lilita one] text-green-700 hover:text-green-900 bg-transparent hover:bg-transparent"
                  href="/classes/job-preparation/ae"
                >
                  Assistant Engineer
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      <Link
        className="font-bold text-base lg:text-xl mx-2 font-[lilita one] text-green-700 hover:text-green-900 bg-transparent hover:bg-transparent"
        href="/instructors"
      >
        Instructors
      </Link>

      <Link
        className="font-bold text-base mx-2 font-[lilita one] lg:text-xl text-green-700 hover:text-green-900"
        href="/contact-us"
      >
        Contact
      </Link>

      {userPresence === "admin" ||
      userPresence === "student" ||
      userPresence === "instructor" ? (
        <Link
          className="font-bold text-base mx-2 font-[lilita one] lg:text-xl text-green-700 hover:text-green-900"
          href="/dashboard/profile"
        >
          Dashboard
        </Link>
      ) : (
        <></>
      )}
    </>
  );
  return (
    <div className="fixed w-full bg-slate-100 shadow-xl hover:shadow-2xl duration-300 z-20 ">
      <div className="max-w-screen-xl mx-auto navbar text-green-700">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 grid"
            >
              {navOptions}
            </div>
          </div>
          <Link href="/" className="flex items-center pl-8">
            <img className="h-10 md:h-16" src="/logo/logo.png" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end pr-8">
          {userPresence === "admin" ||
          userPresence === "student" ||
          userPresence === "instructor" ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/logo/user.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-slate-100 rounded-box w-52"
              >
                <li className="mb-2">
                  <Link
                    href="/dashboard/profile"
                    className="justify-between text-base"
                  >
                    Profile
                    <small className="pl-1 text-xs uppercase">
                      {userPresence}
                    </small>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/dashboard" className="text-base">
                    Dashboard
                  </Link>
                </li>
                <li className="mb-2">
                  <a className="text-base" onClick={handleLogOut}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <p className="font-bold decoration-none font-[lilita one] md:text-xl text-green-700">
              <Link href="/login">Login</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
