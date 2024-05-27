import React, { useState, useContext } from "react";
import { Navigate, useLocation, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import { AuthContext } from "../context/auth.context";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const { state } = useLocation();

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log("Login is successful");
        setIsUserLoggedIn(true);
      })
      .catch((err) => {
        console.error("Error signing in:", err);
        setError("Invalid Email or Password");
      });
  };

  const setLoginEmail = (e) => {
    setEmail(e.target.value);
  };

  const setLoginPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      {isUserLoggedIn && <Navigate to={state?.from || "/"} replace />}
      <div className="logincontent">
        <h1 className="loginheader">Login</h1>
        <label className="Label1" htmlFor="UserName">
          Enter your email:
        </label>
        <input
          className="Email"
          type="email"
          value={email}
          onChange={setLoginEmail}
          required
        />
        <label className="Label2" htmlFor="password">
          Enter Password:
        </label>
        <input
          className="password"
          type="password"
          value={password}
          onChange={setLoginPassword}
          required
        />
        {error && <p className="error">{error}</p>}
        <button className="submitbtn" onClick={signinUser}>
          Submit
        </button>
        <p className="signup">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
