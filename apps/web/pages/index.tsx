import type {NextPage} from "next";
import Head from "next/head";
import {Navbar, ProductsSection} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | ECommerce shop</title>
      </Head>
      <Navbar />
      <main className="home-page">
        <ProductsSection />
      </main>
    </>
  );
};

export default Home;
