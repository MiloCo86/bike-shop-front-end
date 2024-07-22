// Depencies

import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';


import BikeMiniCard from './BikeMiniCard';

// CSS
import '../styles/Home.css';

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
        Main Content
        </div>
        <div className="home__testimonials">
          <div className="home__testimonial-box">Testimonial 1</div>
          <div className="home__testimonial-box">Testimonial 2</div>
          <div className="home__testimonial-box">Testimonial 3</div>
        </div>
        </div>
        <div className="home__sidebar">
          <div className="home__autoscroll-display">
            <BikeMiniCard bike={bike[Math.floor(Math.random() * bike.length)]} />
            <BikeMiniCard bike={bike[Math.floor(Math.random() * bike.length)]} />
            <BikeMiniCard bike={bike[Math.floor(Math.random() * bike.length)]} />
          </div>
      </div>
    </div>
  )
}

export default Home
