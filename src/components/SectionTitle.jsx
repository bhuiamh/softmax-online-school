import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="mb-6 md:mb-10">
      <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
      {subTitle && (
        <p className="text-lg font-medium text-gray-700">{subTitle}</p>
      )}
      <p className="w-32 bg-green-500 h-1"></p>
    </div>
  );
};

export default SectionTitle;
