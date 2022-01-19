import React from "react";
import {NextPage} from "next";
import Head from "next/head";
import {Navbar, SignUpForm} from "../components";

const SignUpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up | ECommerce Shop</title>
      </Head>
      <Navbar />
      <main className="login-page">
        <h2 className="login-page-title">Sign Up</h2>
        <SignUpForm />
      </main>
    </>
  );
};

export default SignUpPage;
