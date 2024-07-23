// Depencies

import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';


import BikeMiniCard from './BikeMiniCard';

// CSS
import '../styles/Home.css';

//logo
import logo from '../assets/sprocket_science_logo.png'


// component 

const Home = () => {

  const [bike, setBike] = useState([{
    id: "",
    make: "",
    model: "",
    year: "",
    price: 0,
    bike_type: "",
    frame: "",
    bike_weight: "",
    is_new: true,
    in_stock: 0,
    img_url: ""
  }]);
  const API = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setBike(res)
      })
      .catch((err) => console.error(err));
  }, []);



  return (
    <div className='home__main'>
     
      <div className='home__container'>
        <div className="home__main-content">
            <img className='home__logo' src={logo}></img>
            <h1 className='home__welcome-header'>Welcome to Sprocket Science!</h1>
            <h2 className='home__slogan'>Bike mechanics at rocket-level precision</h2>
        </div>
        <div className="home__testimonials">
          <div className="home__testimonial-box">
          </div>
          <div className="home__testimonial-box"></div>
          <div className="home__testimonial-box"></div>
        </div>
        </div>
        <div className="home__sidebar">
          <div className="home__autoscroll-display">
            <BikeMiniCard  className='home__miniBike-card' bike={bike[Math.floor(Math.random() * bike.length)]} /> <br/>
            <BikeMiniCard className='home__miniBike-card' bike={bike[Math.floor(Math.random() * bike.length)]} /><br/>
            <BikeMiniCard className='home__miniBike-card'bike={bike[Math.floor(Math.random() * bike.length)]} />
          </div>
      </div>

    </div>
    
  )
}

export default Home
