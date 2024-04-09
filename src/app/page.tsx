
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/sections/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Header />
      <Head>
        <title>7Creative Desgin</title>
      </Head>
      <Hero />
    </>
  );
}
