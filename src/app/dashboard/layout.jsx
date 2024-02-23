"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
import DashboardMenu from "./DashboardMenu";

export default function DashboardLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
                  {/* {dashboardItem} */}
                  <DashboardMenu />
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="sm:hidden mx-3">
              <div className="flex flex-col items-center mt-2">
                {/* {dashboardItem} */}
                <DashboardMenu />
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
