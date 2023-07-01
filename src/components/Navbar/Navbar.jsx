import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import { IoEarth } from 'react-icons/io5'
import { IoSearch } from 'react-icons/io5'

import './Navbar.css'

const Navbar = () => {
  const [product, setProduct] = useState(false)
  const [solution, setSolution] = useState(false)
  const [partners, setPartners] = useState(false)
  const [resources, setResources] = useState(false)
  const [company, setCompany] = useState(false)

  console.log(product)
  // console.log(solution)
  // console.log(partners)
  // console.log(resources)
  // console.log(company)

  return (
    <div className="navbar-container">
      <ul className="left-nav">
        <Link
          to={'/'}
          className=" logo nav-items"
        >
          proofpoint.
        </Link>
        <li>
          <NavLink
            onMouseEnter={() => setProduct(!product)}
            // onMouseLeave={() => setProduct(!product)}
            className={product ? 'nav-items active' : 'nav-items'}
          >
            Products
            <IoIosArrowDown />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-items"
            onMouseEnter={() => setSolution(!solution)}
            onMouseLeave={() => setSolution(!solution)}
          >
            Solutions
            <IoIosArrowDown />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-items"
            onMouseEnter={() => setPartners(!partners)}
            onMouseLeave={() => setPartners(!partners)}
          >
            Partners
            <IoIosArrowDown />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-items"
            onMouseEnter={() => setResources(!resources)}
            onMouseLeave={() => setResources(!resources)}
          >
            Resources
            <IoIosArrowDown />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-items"
            onMouseEnter={() => setCompany(!company)}
            onMouseLeave={() => setCompany(!company)}
          >
            Company
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
