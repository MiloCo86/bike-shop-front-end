import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/NavBar.css'

//icons for the navbar
import bikeIcon from '../assets/pedal_bike_75dp_bikeIcon.svg' //bike icon
import aboutIcon from '../assets/info_75dp_aboutIcon.svg' //about icon

//navbar component
const NavBar = () => {
  return (
      <nav className='navbar__container'>
          <ul className="navbar__menu">
            <div className='navbar__top_section'>
              <div className='navbar__bike_navigation'>
                <li className="navbar__item">
                  <Link to={'/bikes/new'} className="navbar__link">
                    <span className="navbar__icon"> <img src={bikeIcon} alt="Logo img" /></span>
                    New Bikes
                  </Link>
                </li>

                <li className="navbar__item">
                  <Link to={'/bikes/used'} className="navbar__link">
                    <span className="navbar__icon"><img src={bikeIcon} alt="Logo img" /></span>
                    Used Bikes
                  </Link>
                </li>

                <li className="navbar__item">
                  <Link to={'/bikes'} className="navbar__link">
                    <span className="navbar__icon"><img src={bikeIcon} alt="Logo img" /></span>
                    All Bikes
                  </Link>
                </li>
              </div>
            </div>

            {/* <div className='navbar__bottom_section'>
              <div className='navbar__about_navigation'>
                <li className="navbar__item">
                  <Link to={'/about'} className="navbar__link">
                    <span className="navbar__icon"><img src={aboutIcon} alt="Logo img" /></span>
                    About
                  </Link>
                </li>
              </div>
            </div> */}
            
          </ul>
    </nav>
  )
}

export default NavBar
