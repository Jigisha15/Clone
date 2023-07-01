import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { IoIosArrowDown } from 'react-icons/io'
import { IoEarth } from 'react-icons/io5'
import { IoSearch } from 'react-icons/io5'

import './Navbar.css'

const Navbar = () => {
  return (
    <div
      className="navbar-container"
      style={{ position: 'relative' }}
    >
      <ul className="left-nav">
        <Link
          to={'/'}
          className=" logo nav-items"
        >
          proofpoint.
        </Link>
        <li>
          <NavLink className="nav-items">
            Products &nbsp;
            <IoIosArrowDown size={12} />
          </NavLink>
        </li>

        <li>
          <NavLink className="nav-items">
            Solutions &nbsp;
            <IoIosArrowDown />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-items">
            Partners &nbsp;
            <IoIosArrowDown />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-items">
            Resources &nbsp;
            <IoIosArrowDown />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-items">
            Company &nbsp;
            <IoIosArrowDown />
          </NavLink>
        </li>
      </ul>

      <ul className="right-nav">
        <li>
          <NavLink className="search r-nav-items">
            <IoSearch color="white" />
          </NavLink>
        </li>
        <li>
          <NavLink className=" r-nav-items">
            <IoEarth />
          </NavLink>
        </li>
        <li>
          <Link
            className="login r-nav-items"
            to={'/login'}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className="contact-btn r-nav-items"
            to={'/register'}
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
