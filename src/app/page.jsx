import Banner from "@/components/Banner";
import Head from "next/head";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Softmax Online School</title>
        <link rel="icon" href="/logo/logo.png" />
      </Head>

      <Banner />
    </div>
  );
}
