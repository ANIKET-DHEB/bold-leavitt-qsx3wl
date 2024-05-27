import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

const SignupPage = () => {
  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password, UserName)
      .then((value) => {
        alert("Success");
      })
      .catch((error) => {
        console.error("Error signing up:", error.message);
        alert(`Error: ${error.message}`);
      });
  };

  return (
    <div className="signupcontainer">
      <h1 className="signupheader">Signup</h1>
      <label className="SignupUser">
        Enter Your Username:
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={UserName}
          className="signuptext"
          type="text"
          name="username"
        />
      </label>
      <br />
      <label className="SignupEmail">
        Enter Your Email:
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="signuptext"
          type="email"
          name="email"
        />
      </label>
      <br />
      <label className="SignupPass">
        Enter Your Password:
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="signuptext"
          type="password"
          name="password"
        />
      </label>
      <br />
      <button className="Signupbtn" type="submit" onClick={createUser}>
        Sign Up
      </button>
    </div>
  );
};

export default SignupPage;
