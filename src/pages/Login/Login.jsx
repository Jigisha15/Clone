import React from 'react'
import { Link } from 'react-router-dom'

import './Login.css'

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form action="">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        <h1 className="line">
          Not a User?
          <Link
            to={'/register'}
            className="links"
          >
            Register
          </Link>
        </h1>
      </div>
    </div>
  )
}

export default Login
