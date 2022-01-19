import React from "react";
import Link from "next/link";

export const LoginFrom: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleEmailChange(e: React.SyntheticEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
  }

  function handlePasswordChange(e: React.SyntheticEvent<HTMLInputElement>) {
    setPassword(e.currentTarget.value);
  }

  return (
    <form action="submit" className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="enter your email"
          value={email}
          onChange={handleEmailChange}
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
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="form-bottom">
        <Link href="/sign-up" passHref>
          <button className="btn--secondary">Sign up</button>
        </Link>
        <button className="btn--primary">Login</button>
      </div>
    </form>
  );
};
