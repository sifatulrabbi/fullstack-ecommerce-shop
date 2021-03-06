import React from "react";
import Link from "next/link";

export const ProfileForm: React.FC = () => {
  return (
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
      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm_password"
          required
          placeholder="enter your password again"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="enter your contact number"
        />
      </div>
      <h4>Address</h4>
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          required
          placeholder="enter your country name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="province">Province</label>
        <input
          type="text"
          id="province"
          name="province"
          required
          placeholder="enter your province"
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          required
          placeholder="enter your city name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="area">Area</label>
        <input
          type="text"
          id="area"
          name="area"
          required
          placeholder="enter your area name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="zip-code">Zip Code</label>
        <input
          type="number"
          id="zip-code"
          name="zip_code"
          required
          placeholder="enter your zip code"
        />
      </div>
      <div className="form-bottom">
        <Link href="/" passHref>
          <button className="btn--secondary">Cancel</button>
        </Link>
        <button className="btn--primary">Save</button>
      </div>
    </form>
  );
};
