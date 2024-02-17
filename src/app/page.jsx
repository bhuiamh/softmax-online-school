import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Softmax Online School</title>
        <link rel="icon" href="/logo/logo.png" />
      </Head>

      <Navbar />
      <div className="pt-32">
        {" "}
        <Footer />
      </div>
    </div>
  );
}
