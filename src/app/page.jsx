import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Digitosys</title>
      </Head>

      <Navbar />
    </div>
  );
}
