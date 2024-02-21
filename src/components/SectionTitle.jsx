import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="mb-6 md:mb-10">
      <h1 className="text-4xl lg:text-5xl font-bold">{title}</h1>
      {subTitle && (
        <p className="text-xl font-medium text-gray-700">{subTitle}</p>
      )}
      <p className="w-32 bg-green-700 h-1"></p>
    </div>
  );
};

export default SectionTitle;
