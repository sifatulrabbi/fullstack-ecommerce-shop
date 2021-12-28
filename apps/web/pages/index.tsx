import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | eCommerce shop</title>
      </Head>
      <main className="home-page">
        <h1 className="title">Buy from home</h1>
        <button className="button">Hello</button>
      </main>
    </>
  );
};

export default Home;
