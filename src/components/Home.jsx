// Depencies

import React from 'react'

// CSS

import '../styles/Home.css';

const Home = () => {
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
        <div className="home__sidebar">
          Sidebar
      </div>
    </div>
  )
}

export default Home
