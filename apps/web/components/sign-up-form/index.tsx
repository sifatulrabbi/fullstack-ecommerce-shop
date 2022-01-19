import React from "react";
import Link from "next/link";
import {Toast} from "../toast";

export const SignUpForm: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errors, setErrors] = React.useState("");

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmPassword !== password) {
      setErrors("Passwords don't match");
    } else {
      setErrors("");
    }
  }

  function handleEmailChange(e: React.SyntheticEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
  }

  function handlePasswordChange(e: React.SyntheticEvent<HTMLInputElement>) {
    setPassword(e.currentTarget.value);
  }

  function handleConfirmPasswordChange(
    e: React.SyntheticEvent<HTMLInputElement>,
  ) {
    setConfirmPassword(e.currentTarget.value);
  }

  return (
    <>
      <Toast message={errors} show={errors.length > 1} severity="error" />
      <form action="submit" className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="enter your contact number"
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
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm_password"
            required
            placeholder="enter your password again"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div className="form-bottom">
          <Link href="/login" passHref>
            <button className="btn--secondary">Login</button>
          </Link>
          <button className="btn--primary">Sign Up</button>
        </div>
      </form>
    </>
  );
};
