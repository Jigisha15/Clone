import React from 'react'
import { Link } from 'react-router-dom'

import './Register.css'

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-form">
        <h1>Register</h1>
        <form action="">
          <label htmlFor="name">UserName</label>
          <input
            type="text"
            placeholder="Enter Your UserName"
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter  Email Id"
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
          />
          <br />
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
        <h1 className="line">
          Already a User ?
          <Link
            to={'/login'}
            className="links"
          >
            Login
          </Link>
        </h1>
      </div>
    </div>
  )
}

export default Register
