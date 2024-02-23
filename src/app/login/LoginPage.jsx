"use client";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.email === "student@softmax.com" &&
      formData.password === "softmax"
    ) {
      // localStorage.setItem("isUserPresent", "student");
      if (typeof window !== "undefined") {
        // Perform localStorage action
        localStorage.setItem("isUserPresent", "student");
      }
      router.push("/dashboard/profile");
      Swal.fire({
        icon: "success",
        title: "Login Successful",
      });
    } else if (
      formData.email === "instructor@softmax.com" &&
      formData.password === "softmax"
    ) {
      // localStorage.setItem("isUserPresent", "instructor");
      router.push("/dashboard/profile");
      Swal.fire({
        icon: "success",
        title: "Login Successful",
      });
    } else if (
      formData.email === "admin@softmax.com" &&
      formData.password === "softmax"
    ) {
      // localStorage.setItem("isUserPresent", "admin");
      router.push("/dashboard/profile");
      Swal.fire({
        icon: "success",
        title: "Login Successful",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid number of password",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-screen-xl min-h-screen mx-auto p-6 md:p-10">
      <SectionTitle title="Login" subTitle="Enter your credentials below" />
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={toggleModal}
            className="bg-green-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-900"
          >
            Credentials
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-40">
            <div className="bg-white p-6 md:p-10 rounded-md">
              <h2 className="text-lg font-bold mb-4">Login Credentials</h2>
              <h1>For Student</h1>
              <p>Email: student@softmax.com</p>
              <p>Password: softmax</p>
              <h1 className="mt-2">For Student</h1>
              <p>Email: instructor@softmax.com</p>
              <p>Password: softmax</p>
              <h1 className="mt-2">For Student</h1>
              <p>Email: admin@softmax.com</p>
              <p>Password: softmax</p>
              <button
                onClick={toggleModal}
                className="mt-6 bg-green-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-900"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="mb-4">
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3.5 py-2 border-b-2 border-green-700 focus:outline-none focus:border-b-2 focus:border-green-700"
          />
        </div>
        <div className="mb-4 relative">
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-3.5 py-2 border-b-2 border-green-700 focus:outline-none focus:border-b-2 focus:border-green-700"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="w-full flex items-center mt-6 md:mt-10">
          <div className="w-1/2 h-[1px] bg-green-700"></div>
          <div className="mx-2">Or</div>
          <div className="w-1/2 h-[1px] bg-green-700"></div>
        </div>
        <div className="w-full flex space-x-5 mt-2">
          <button className="flex items-center justify-center w-full rounded-md bg-transparent px-3.5 py-2.5 text-center text-sm font-semibold text-[#FBBC05] shadow-sm hover:bg-[#FBBC05] hover:text-white border-2 border-[#FBBC05] duration-500">
            {" "}
            Login with <FaGoogle className="ml-2" />
          </button>
          <button className="w-full flex  items-center justify-center rounded-md bg-transparent px-3.5 py-2.5 text-center text-sm font-semibold text-[#316FF6] shadow-sm hover:bg-[#316FF6] hover:text-white border-2 border-[#316FF6] duration-500">
            {" "}
            Login with <FaFacebook className="ml-2" />
          </button>
        </div>
        <div className="flex items-center justify-center mt-4">
          <h1 className="text-green-700">New to Softmax Online School?</h1>
          <Link className="ml-1 text-green-900" href="signup">
            Create an account
          </Link>
        </div>
        <div className="mt-6 md:mt-10">
          <button
            type="submit"
            className="w-full rounded-md bg-transparent px-3.5 py-2.5 text-center text-sm font-semibold text-green-700 shadow-sm hover:bg-green-700 hover:text-white border-2 border-green-700 duration-500"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
