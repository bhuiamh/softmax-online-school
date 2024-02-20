import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Head from "next/head";
import ClassCard from "./classes/ClassCard";
import SectionTitle from "@/components/SectionTitle";
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

      <AboutUs />
    </div>
  );
}
