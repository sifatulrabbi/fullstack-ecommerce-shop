import React from "react";
import {NextPage} from "next";
import Head from "next/head";
import {Navbar, LoginFrom} from "../components";

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | ECommerce Shop</title>
      </Head>
      <Navbar />
      <main className="login-page">
        <h2 className="login-page-title">Login</h2>
        <LoginFrom />
      </main>
    </>
  );
};

export default LoginPage;
