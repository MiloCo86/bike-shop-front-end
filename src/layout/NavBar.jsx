import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar__container'>
        <div className="links">
            <Link to={'/bikes'}>Bikes</Link><br />
            <Link to={'/usedBikes'}>Used Bikes</Link>
        </div>
        <Link to={'/about'}>About</Link>

    </div>
  )
}

export default NavBar
