"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const userPresence = localStorage.getItem("isUserPresent");

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
        // Assuming this is a defined function to handle logout logic

        localStorage.removeItem("isUserPresent"); // (no typo)

        // Handle successful logout:
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

  if (
    userPresence !== "admin" ||
    userPresence !== "instructor" ||
    userPresence !== "student"
  ) {
    router.push("/");
  }
  const dashboardItem = (
    <>
      <Link onClick={toggleMenu} href="/dashboard/profile">
        Profile
      </Link>
      {userPresence === "student" && (
        <Link onClick={toggleMenu} href="/dashboard/enrolled-class">
          Enrolled Classes
        </Link>
      )}
      {userPresence === "student" && (
        <Link onClick={toggleMenu} href="/dashboard/payment-history">
          Payment History
        </Link>
      )}
      {userPresence === "admin" && (
        <Link onClick={toggleMenu} href="/dashboard/manage">
          Manage User
        </Link>
      )}
      {userPresence === "admin" && (
        <Link onClick={toggleMenu} href="/dashboard/manage">
          Manage Instructor
        </Link>
      )}
      {userPresence === "admin" && (
        <Link onClick={toggleMenu} href="/dashboard/manage">
          Manage Class
        </Link>
      )}
      {userPresence === "instructor" && (
        <Link onClick={toggleMenu} href="/dashboard/manage">
          Manage Class
        </Link>
      )}
      {userPresence === "instructor" && (
        <Link onClick={toggleMenu} href="/dashboard/add-class">
          Add A Class
        </Link>
      )}
      <Link onClick={toggleMenu} href="/">
        Home
      </Link>

      <Link onClick={toggleMenu} href="/dashboard/change-password">
        Change Password
      </Link>
      <Link onClick={handleLogOut} href="/">
        Logout
      </Link>
    </>
  );
  return (
    <section className=" w-full">
      <div className="h-screen max-w-screen-xl flex flex-col md:flex-row mx-auto">
        {/* Dashboard Menu */}
        <nav className="pt-24  bg-white shadow-2xl md:w-1/4 lg:w-1/4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="sm:hidden">
                  {/* Mobile Menu Button */}
                  <button
                    type="button"
                    className="text-gray-500 text-xl hover:text-gray-700 focus:outline-none focus:text-gray-700"
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </div>
                <div className="hidden md:flex flex-col justify-center font-semibold text-green-700 md:space-y-4 mt-8">
                  {dashboardItem}
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="sm:hidden mx-3">
              <div className="flex flex-col items-center mt-2">
                {dashboardItem}
              </div>
            </div>
          )}
        </nav>

        {/* Dashboard Content */}
        <main className="py-10 flex-1 pt-24 mt-8">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* Outlet here */}
            <div>{children}</div>
          </div>
        </main>
      </div>
    </section>
  );
}
