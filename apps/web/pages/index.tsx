import type {NextPage} from "next";
import Head from "next/head";
import {Navbar, ProductsSection, Footer} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | ECommerce shop</title>
      </Head>
      <main className="home-page">
        <ProductsSection />
      </main>
    </>
  );
};

export default Home;
