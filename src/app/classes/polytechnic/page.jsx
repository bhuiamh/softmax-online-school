import React from "react";
import PolytechnicClasses from "./PolytechnicClasses";
import { polytechnicClassesData } from "@/data/ClassesData";

const page = () => {
  return (
    <div className="pt-32">
      <PolytechnicClasses />
    </div>
  );
};

export default page;
