import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/BikeMiniCard.css'

const BikeMiniCard = ({bike}) => {


  return (
    <div className='miniCard__Container'>
        <Link to={`/bikes/${bike.id}`} className='miniCard__summary'>
            <img src={bike.img_url} alt="" />
            <div>{bike.make}</div>
            <div>{bike.model}</div>
            <div>$ {bike.price}</div>
        </Link>

    </div>
  )
}

export default BikeMiniCard
