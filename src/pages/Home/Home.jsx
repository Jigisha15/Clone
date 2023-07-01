import React, { useEffect, useState } from 'react'

import bgimg from '../../assets/bgimg.webp'
import car1 from '../../assets/car1.jpg'

import './Home.css'

const Home = () => {
  // const carousel = [
  //   {
  //     id: 1,
  //     title: '2023 for Human Factor',
  //     open: 'RECOMENDED | THREAT REPORT',
  //     image: car1,
  //   },
  //   {
  //     id: 2,
  //     title:
  //       'Proofpoint Named a Leader in The Forrester Wave™: Enterprise Email Security, Q2 2023',
  //     open: 'FEATURED | ANALYST REPORT',
  //     image: car1,
  //   },
  //   {
  //     id: 3,
  //     title: 'Identity Threat Detection and Response',
  //     open: 'FEATURED | PRODUCT',
  //     image: car1,
  //   },
  //   {
  //     id: 4,
  //     title: 'Protect',
  //     open: 'FEATURED | EVENT',
  //     image: car1,
  //   },
  //   {
  //     id: 5,
  //     title: 'Proofpoint Power Series',
  //     open: 'FEATURED | EVENT',
  //     image: car1,
  //   },
  // ]

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCount()
  //   }, 5000)
  // })

  return (
    <div className="home-container">
      <div className="home-top">
        <img
          src={bgimg}
          alt=""
          className="home-image"
        />
        <p className="image-text">
          <h1>Break the attack chain</h1>
          <p>
            Protect your people from advanced email attacks and <br />
            identity-based threats. Defend sensitive data from <br /> theft,
            loss and insider threats.
          </p>
        </p>
      </div>

      {/* <div className="home-carousel">
        {carousel.map((item, index) => (
          <div
            className="carousel"
            key={index}
          >
            <img
              src={item.image}
              alt=""
            />
            <p>{item.open}</p>
            <h4>{item.title}</h4>

            <button>Learn More</button>
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default Home
