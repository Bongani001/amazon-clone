import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("checkinf for validity");
  //     setFormIsValid(email.includes("@") && password.trim().length > 6);
  //   }, 500);

  //   return () => {
  //     console.log("clean the things");

  //     clearTimeout(identifier);
  //   };
  // }, [email, password]);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={emailChangeHandler} />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={passwordChangeHandler}
            autoComplete="off"
          />
          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to the FAKE AMAZON CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookie Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login-registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
