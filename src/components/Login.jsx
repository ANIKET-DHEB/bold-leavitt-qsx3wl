import { useContext, useState } from "react";
import { Navigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const Login = () => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { state } = useLocation();

  const loginHandler = () => {
    if (username === "" && password === "") {
      setIsUserLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

  const setLoginUserName = (e) => {
    setUsername(e.target.value);
  };

  const setLoginPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      {isUserLoggedIn && <Navigate to={state.from} replace />}
      <div className="logincontent">
        <h1 className="loginheader">Login</h1>

        <label className="Label1" htmlFor="UserName ">
          Enter your email:
        </label>

        <input
          className="username"
          type="email"
          value={username}
          onChange={setLoginUserName}
          required
        />

        <label className="Label2" htmlFor="password">
          Enter Passsword:
        </label>

        <input
          className="password"
          type="password"
          value={password}
          onChange={setLoginPassword}
        />
        <button className="submitbtn" onClick={loginHandler}>
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
