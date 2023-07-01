import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { TiSocialFacebook } from 'react-icons/ti'
import { TiSocialTwitter } from 'react-icons/ti'
import { TiSocialLinkedin } from 'react-icons/ti'
import { TiSocialYoutube } from 'react-icons/ti'
import { IoEarth } from 'react-icons/io5'

import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="top-left">
          <ul className="first-list">
            <li className="first-item ul-first">About</li>
            <li>
              <NavLink className="ul-item">Overview</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Why Proofpoint</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Careers</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Leadership Team</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">News Center</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Nexus Platform</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Privacy and Trust</NavLink>
            </li>
          </ul>

          <ul className="first-list">
            <li className="first-item ul-first">Threat Center</li>
            <li>
              <NavLink className="ul-item">Threat Hub</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Cybersecurity Awareness Hub</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Ransomware Hub</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Threat Glossary</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Threat Blog</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Daily Ruleset</NavLink>
            </li>
          </ul>

          <ul className="first-list">
            <li className="first-item ul-first">Products</li>

            <li>
              <NavLink className="ul-item">Email Security & Protection</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Advanced Threat Protection</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Security Awareness Training</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Cloud Security</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Archive & Compilance</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Information Protection</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Digital Risk Protection</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Product Bundles</NavLink>
            </li>
          </ul>

          <ul className="first-list">
            <li className="first-item ul-first">Resources</li>
            <li>
              <NavLink className="ul-item">White Papers</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Webinars</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Data Sheets</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Events</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Customer Stories</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Blog</NavLink>
            </li>
            <li>
              <NavLink className="ul-item">Free Trial</NavLink>
            </li>
          </ul>
        </div>

        <div className="top-right">
          <ul>
            <li
              style={{ color: 'white', fontWeight: '600', fontSize: '1.15rem' }}
            >
              Connect
            </li>
            <li style={{ color: '#009ada' }}>+1-234-567-8910</li>
            <li>Contact Us</li>
            <li>Office Locations</li>
            <li>Request a Demo</li>
            <li
              style={{ color: 'white', fontWeight: '600', fontSize: '1.15rem' }}
            >
              Support
            </li>
            <li>Support Login</li>
            <li>Support Serrvices</li>
            <li>Ip Address Blocked?</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="fb-left">
          <ul className="fbl-left">
            <li>
              <Link
                to={'/'}
                className="fbl-items
              "
              >
                proofpoint.
              </Link>
            </li>
            <li>
              <Link
                to={'https://facebook.com'}
                className="fbl-items icons
              "
              >
                <TiSocialFacebook />
              </Link>
            </li>
            <li>
              <Link
                to={'https://twitter.com'}
                className="fbl-items icons
              "
              >
                <TiSocialTwitter />
              </Link>
            </li>
            <li>
              <Link
                to={'https://linkedin.com'}
                className="fbl-items icons"
              >
                <TiSocialLinkedin />
              </Link>
            </li>
            <li>
              <Link
                to={'https://youtube.com'}
                className="fbl-items icons
                "
              >
                <TiSocialYoutube />
              </Link>
            </li>
          </ul>
        </div>

        <ul className="fbl-right">
          <li>
            <NavLink
              className="left-right-items"
              style={{ color: 'grey' }}
            >
              ©2023 All rights reserved.
            </NavLink>
          </li>
          <li>
            <NavLink className="left-right-items">Terms and conditions</NavLink>
          </li>
          <li>
            <NavLink className="left-right-items">Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink className="left-right-items">Sitemap</NavLink>
          </li>
          <li>
            <NavLink className="left-right-items">
              <IoEarth />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
