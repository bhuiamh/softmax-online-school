import React from "react";

const page = () => {
  const data = [
    { id: 1, name: "Polytechnic Classes", progress: 25, isOpen: true },
    { id: 2, name: "DUET Preparation", progress: 50, isOpen: false },
    { id: 3, name: "SAE Preparation", progress: 75, isOpen: true },
  ];
  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md">
      <h1 className="pt-4 text-center font-semibold text-xl text-green-700">
        My Enrolled Class
      </h1>{" "}
      <div className="rounded-lg">
        <table className="w-full text-sm text-left  font-semibold">
          <thead>
            <tr className="text-xs text-green-700">
              <th scope="col" className="px-6 py-3 text-green-700">
                Serial
              </th>
              <th scope="col" className="px-6 py-3 text-green-700">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-green-700">
                Progress
              </th>
              <th scope="col" className="px-6 py-3 text-green-700">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-green-700 hover:bg-gray-100 dark:hover:bg-gray-100 duration-300"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {item.id}
                </td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.progress}%</td>
                <td className="px-6 py-4 w-32">
                  {item.isOpen ? (
                    <button className="w-full px-2 py-1 font-semibold text-white rounded-full bg-green-700 hover:bg-white hover:text-green-700 duration-300">
                      Open
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full px-2 py-1 font-semibold rounded-full bg-red-500 text-white"
                    >
                      Closed
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
