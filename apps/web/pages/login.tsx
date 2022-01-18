import React from "react";
import {NextPage} from "next";
import Head from "next/head";
import {Navbar} from "../components";
import Link from "next/link";

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | ECommerce Shop</title>
      </Head>
      <Navbar />
      <main className="login-page">
        <h2 className="login-page-title">Login</h2>
        <form action="submit" className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="enter your user name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="enter your password"
            />
          </div>
          <div className="form-bottom">
            <Link href="/sign-up" passHref={true}>
              <button className="btn--secondary">Sign up</button>
            </Link>
            <button className="btn--primary">Login</button>
          </div>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
