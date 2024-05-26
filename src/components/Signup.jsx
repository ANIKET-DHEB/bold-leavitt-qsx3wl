import React from "react";

const Signup = () => {
  return (
    <div className="signupcontainer">
      <h1 className="signupheader">Signup</h1>

      <label className="SignupUser">
        Enter Your Username:
        <input className="signuptext" type="text" name="username" />
      </label>
      <br />
      <label className="SignupEmail">
        Enter Your Email:
        <input className="signuptext" type="email" name="email" />
      </label>
      <br />
      <label className="SignupPass">
        Enter Your Password:
        <input className="signuptext" type="password" name="password" />
      </label>
      <br />
      <button className="Signupbtn" type="submit">
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
