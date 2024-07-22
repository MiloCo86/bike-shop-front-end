// Depencies

import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';


import BikeMiniCard from './BikeMiniCard';

// CSS
import '../styles/Home.css';

// component 

const Home = () => {

  const [bikes, setBikes] = useState([{
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
        setBikes(res)
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
          <div className="home__testimonial-box-1">Testimonial 1</div>
          <div className="home__testimonial-box-2">Testimonial 2</div>
          <div className="home__testimonial-box-3">Testimonial 3</div>
        </div>
        </div>
        <div className="home__sidebar" >
         {/* <BikeMiniCard  bike={bikes[0]} />
         <BikeMiniCard bike={bikes[1]} />
         <BikeMiniCard bike={bikes[2]} /> */}
      </div>
    </div>
  )
}

export default Home
