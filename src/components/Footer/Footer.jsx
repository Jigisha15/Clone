import React from 'react'
import { NavLink } from 'react-router-dom'

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
          <table>
            <tr>
              <th>About</th>
              <th>Threat Center</th>
              <th>Products</th>
              <th>Resources</th>
            </tr>

            <tr>
              <td>Overview</td>
              <td>Threat Hub</td>
              <td>Email Security & Protection</td>
              <td>White Papers</td>
            </tr>
            <tr>
              <td>Why Proofpoint</td>
              <td>Cybersecurity Awareness Hub</td>
              <td>Advanced Threat Protection</td>
              <td>Webinars</td>
            </tr>
            <tr>
              <td>Careers</td>
              <td>Ransomware Hub</td>
              <td>Security Awareness Training</td>
              <td>Data Sheets</td>
            </tr>
            <tr>
              <td>Leadership Team</td>
              <td>Threat Glossary</td>
              <td>Cloud Security</td>
              <td>Events</td>
            </tr>
            <tr>
              <td>News Center</td>
              <td>Threat Blog</td>
              <td>Archive & Compilance</td>
              <td>Customer Stories</td>
            </tr>
            <tr>
              <td>Nexus Platform</td>
              <td>Daily Ruleset</td>
              <td>Information Protection</td>
              <td>Blog</td>
            </tr>
            <tr>
              <td>Privacy and Trust</td>
              <td></td>
              <td>Digital Risk Protection</td>
              <td>Free Trial</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Product Bundles</td>
              <td></td>
            </tr>
          </table>
        </div>

        <div className="top-right">
          <ul>
            <li>Connect</li>
            <li>+1-234-567-8910</li>
            <li>Contact Us</li>
            <li>Office Locations</li>
            <li>Request a Demo</li>
            <li>Support</li>
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
              <NavLink
                className="fbl-items
              "
              >
                proofpoint.
              </NavLink>
            </li>
            <li>
              <NavLink
                className="fbl-items icons
              "
              >
                <TiSocialFacebook />
              </NavLink>
            </li>
            <li>
              <NavLink
                className="fbl-items icons
              "
              >
                <TiSocialTwitter />
              </NavLink>
            </li>
            <li>
              <NavLink className="fbl-items icons">
                <TiSocialLinkedin />
              </NavLink>
            </li>
            <li>
              <NavLink
                className="fbl-items icons
                "
              >
                <TiSocialYoutube />
              </NavLink>
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
