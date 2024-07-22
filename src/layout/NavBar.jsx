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
        <li className="navbar__item">
          <Link to={'/bikes/new'} className="navbar__link">
            <span className="navbar__icon"> <img src={bikeIcon} alt="Logo img" /></span>
            Bikes
          </Link>
        </li>
        <li className="navbar__item">
          <Link to={'/bikes/used'} className="navbar__link">
            <span className="navbar__icon"><img src={bikeIcon} alt="Logo img" /></span>
            Used Bikes
          </Link>
        </li>
        <li className="navbar__item">
          <Link to={'/about'} className="navbar__link">
            <span className="navbar__icon"><img src={aboutIcon} alt="Logo img" /></span>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
