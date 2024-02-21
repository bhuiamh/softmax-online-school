import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md">
        <h2 className="text-2xl text-green-700 font-bold mb-6">Add a Class</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="className"
              className="block text-green-700 font-medium mb-2"
            >
              Class Title
            </label>
            <input
              type="text"
              id="className"
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-[#23a888]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="instructorName"
              className="block text-green-700 font-medium mb-2"
            >
              Instructor Name
            </label>
            <input
              type="text"
              id="instructorName"
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-[#23a888]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-green-700 font-medium mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-[#23a888]"
              required
            />
          </div>
          <div className="flex space-x-4 items-end">
            <div>
              <label
                htmlFor="image"
                className="block text-green-700 font-medium mb-2"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-[#23a888]"
                required
              />
            </div>
            <button
              type="submit"
              className="h-min hover:bg-green-700 bg-white hover:text-white text-green-700 font-semibold border-2 border-green-700 px-4 py-2 rounded duration-700"
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
