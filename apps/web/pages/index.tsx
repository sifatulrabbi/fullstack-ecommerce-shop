import type {NextPage} from "next";
import Head from "next/head";
import {Navbar, ProductCard} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | ECommerce shop</title>
      </Head>
      <main className="home-page">
        <Navbar />
        <ProductCard />
      </main>
    </>
  );
};

export default Home;
