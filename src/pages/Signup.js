import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../helper/auth'

const Signup = () => {
  const [error, setError] = useState(null);
  const [input, setInput] = useState({email: "", password: ""});
  
  //---------------------------------------------------------------

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInput({...input, [name]: value});
  }
  
  //---------------------------------------------------------------
  
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await signup(input.email, input.password);
    } catch (error) {
      setError(error.message)
    }
  }
  
  //---------------------------------------------------------------
  
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h1>
          Sign Up to
          <Link to="/">Chatty</Link>
        </h1>
        <p>Fill in the form below to create an account.</p>
        <div>
          <input placeholder="Email" name="email" type="email" onChange={handleChange} value={input.email}></input>
        </div>
        <div>
          <input placeholder="Password" name="password" onChange={handleChange} value={input.password} type="password"></input>
        </div>
        <div>
          {error ? <p>{error}</p> : null}
          <button type="submit">Sign up</button>
        </div>
        <hr></hr>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}

export default Signup;