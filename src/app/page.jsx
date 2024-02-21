import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Head from "next/head";
import ClassCard from "./classes/ClassCard";
import SectionTitle from "@/components/SectionTitle";
import PolytechnicClasses from "./classes/polytechnic/PolytechnicClasses";
import Contact from "./contact-us/Contact";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Softmax Online School</title>
        <link rel="icon" href="/logo/logo.png" />
      </Head>

      <Banner />

      <div className="mt-6 md:mt-10">
        <ClassCard />
      </div>
      <div className="mt-6 md:mt-10">
        <PolytechnicClasses />
      </div>
      <div className="mt-6 md:mt-10">
        <AboutUs />
      </div>
      <div className="mt-6 md:mt-10">
        <Contact />
      </div>
    </div>
  );
}
