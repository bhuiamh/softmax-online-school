import React from "react";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const user = false;
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "Do you want to log out?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: "Yes, log out",
  //     cancelButtonText: "Cancel",
  //     showClass: {
  //       popup: "animate__animated animate__fadeInDown",
  //     },
  //     hideClass: {
  //       popup: "animate__animated animate__fadeOutUp",
  //     },
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       logOut()
  //         .then(() => {
  //           Swal.fire({
  //             icon: "success",
  //             title: "You have successfully signed out",
  //             showClass: {
  //               popup: "animate__animated animate__fadeInDown",
  //             },
  //             hideClass: {
  //               popup: "animate__animated animate__fadeOutUp",
  //             },
  //           });
  //         })
  //         .catch((error) => {
  //           Swal.fire({
  //             icon: "error",
  //             title: "Something went wrong",
  //             showClass: {
  //               popup: "animate__animated animate__fadeInDown",
  //             },
  //             hideClass: {
  //               popup: "animate__animated animate__fadeOutUp",
  //             },
  //           });
  //         });
  //     }
  //   });
  // };

  const navOptions = (
    <>
      <li className="font-bold text-base font-[lilita one] md:text-xl text-green-500">
        <Link href="/">Home</Link>
      </li>
      <li className="font-bold text-base font-[lilita one] md:text-xl text-green-500">
        <Link href="/instructors">Classes</Link>
      </li>
      <li className="font-bold text-base font-[lilita one] md:text-xl text-green-500">
        <Link href="/classes">Instructors</Link>
      </li>
      <li className="font-bold text-base font-[lilita one] md:text-xl text-green-500">
        <Link href="/classes">Courses</Link>
      </li>
      {user ? (
        <li className="font-bold text-base font-[lilita one] md:text-xl text-green-500">
          <Link href="/dashboard/profile">Dashboard</Link>
        </li>
      ) : (
        <></>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed text-green-500 bg-white-500 shadow-xl hover:shadow-2xl duration-300">
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
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link href="/" className="flex items-center pl-8">
            <img className="h-10 md:h-16" src="/logo/logo.png" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end pr-8">
          {!user ? (
            <p className="font-bold decoration-none font-[lilita one] md:text-xl text-green-500">
              <Link href="/login">Login</Link>
            </p>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {/* <img src={user.photoURL} /> */}
                  <h1>Image</h1>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-orange-500 rounded-box w-52"
              >
                <li className="mb-2">
                  <Link
                    to="/dashboard/profile"
                    className="justify-between text-base"
                  >
                    Profile
                    <small className="pl-2 text-xs">{user.displayName}</small>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-base" to="dashboard/acquiredClass">
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
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
