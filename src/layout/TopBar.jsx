import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/TopBar.css'

//import img or icons
import shoppingCartIcon from '../assets/shopping_cart.svg'
import logo from '../assets/sprocket_science_logo.png'

const TopBar = () => {
  return (
    <div className='topbar__container'>
      <div className="logo">
      <img src={logo} alt="Logo img" />
      </div>
      <div className="shopping_cart_icon">
        <img src={shoppingCartIcon} alt="Logo img" />
      </div>

    </div>
  )
}

export default TopBar
