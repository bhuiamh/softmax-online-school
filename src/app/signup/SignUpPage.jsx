"use client";
import React, { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
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
      <SectionTitle title="Sign Up" subTitle="Create your account" />
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
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
        <div className="mb-4 relative">
          <input
            required
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
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
            Sign Up with <FaGoogle className="ml-2" />
          </button>
          <button className="w-full flex  items-center justify-center rounded-md bg-transparent px-3.5 py-2.5 text-center text-sm font-semibold text-[#316FF6] shadow-sm hover:bg-[#316FF6] hover:text-white border-2 border-[#316FF6] duration-500">
            {" "}
            Sign Up with <FaFacebook className="ml-2" />
          </button>
        </div>
        <div className="flex items-center justify-center mt-4">
          <h1 className="text-green-700">Already have an account?</h1>
          <Link href="/login" className="ml-1 text-green-900">
            Login
          </Link>
        </div>
        <div className="mt-6 md:mt-10">
          <button
            type="submit"
            className="w-full rounded-md bg-transparent px-3.5 py-2.5 text-center text-sm font-semibold text-green-700 shadow-sm hover:bg-green-700 hover:text-white border-2 border-green-700 duration-500"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
