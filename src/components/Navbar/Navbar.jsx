import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import { IoEarth } from 'react-icons/io5'
import { IoSearch } from 'react-icons/io5'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul className="left-nav">
        <NavLink className=" logo nav-items">proofpoint.</NavLink>
        <li>
          <NavLink className="nav-items">
            Products
            <IoIosArrowDown />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-items">
            Solutions
            <IoIosArrowDown />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-items">
            Partners
            <IoIosArrowDown />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-items">
            Resources
            <IoIosArrowDown />
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-items">
            Company
            <IoIosArrowDown />
          </NavLink>
        </li>
      </ul>

      <ul className="right-nav">
        <li>
          <NavLink className="search r-nav-items">
            <IoSearch />
          </NavLink>
        </li>
        <li>
          <NavLink className=" r-nav-items">
            <IoEarth />
          </NavLink>
        </li>
        <li>
          <NavLink className="login r-nav-items">Login</NavLink>
        </li>
        <li>
          <NavLink className="contact-btn r-nav-items">Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
