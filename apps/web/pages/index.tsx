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
        {[1, 2, 3, 4].map((value: number) => (
          <ProductCard key={value} alt={value % 2 === 0} />
        ))}
      </main>
    </>
  );
};

export default Home;
