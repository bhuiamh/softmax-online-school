import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md">
        <h2 className="text-2xl text-green-700 font-bold mb-6">
          Change Password
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="currentPassword"
              className="block text-green-700 font-medium mb-2"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-[#23a888]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="block text-green-700 font-medium mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-[#23a888]"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-green-700 font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-[#23a888]"
              required
            />
          </div>
          <div className="flex justify-end">
            {" "}
            <button
              type="submit"
              className="hover:bg-green-700 bg-white hover:text-white text-green-700 font-semibold border-2 border-green-700 px-4 py-2 rounded duration-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
