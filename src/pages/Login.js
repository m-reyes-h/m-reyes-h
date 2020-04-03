import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGitHub, signInWithGoogle } from "../helper/auth";

const Login = () => {
  const [error, setError] = useState(null);
  const [input, setInput] = useState({ email: "", password: "" });

  //---------------------------------------------------------------

  const handleChange = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  //---------------------------------------------------------------

  const handleOnSubmit = async event => {
    event.preventDefault();
    setError("");
    try {
      await signin(input.email, input.password);
    } catch (error) {
      setError(error.message);
    }
  };

  //---------------------------------------------------------------

  const googleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      setError(error.message);
    }
  };

  const githubSignIn = async () => {
    try {
      await signInWithGitHub();
    } catch (error) {
      setError(error.message);
    }
  };

  //---------------------------------------------------------------

  return (
    <div>
      <form autoComplete="off" onSubmit={handleOnSubmit}>
        <h1>
          Login to
          <Link to="/">Chatty</Link>
        </h1>
        <p>Fill in the form below to login to your account.</p>
        <div>
          <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleChange}
            value={input.email}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={input.password}
            type="password"
          />
        </div>
        <div>
          {error ? <p>{error}</p> : null}
          <button type="submit">Login</button>
        </div>
        <hr />
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
          <p>Or</p>
          <button onClick={googleSignIn} type="button">
            Sign up with Google
          </button>
          <button type="button" onClick={githubSignIn}>
            Sign up with GitHub
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
