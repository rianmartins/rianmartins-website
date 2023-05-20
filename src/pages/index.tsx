import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rian Martins - Frontend Developer</title>
        <meta name="description" content="Rian Martins Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* App Header */}
      <Header />
      {/* App Body */}
      <Hero />
      <Skills />
      {/* App Footer */}
      <Footer />
    </>
  );
}
