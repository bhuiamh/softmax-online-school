import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";
import Contact from "./Contact";

const page = () => {
  return (
    <div className="w-full pt-24 md:pt-32 z-10 min-h-screen">
      <Contact />
    </div>
  );
};

export default page;
