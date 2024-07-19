import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/BikeMiniCard.css'

const BikeMiniCard = ({bike}) => {


  return (
    <div className='miniCard__Container'>
        <Link to={`/bikes/${bike.id}`} className='miniCard__summary'>
            <div className="miniCard__img">
                <img src={bike.img_url} alt="" />
            </div>
            <div className="miniCard__details">
                <div className="miniCard__specs">
                    <div>{bike.make}</div>
                    <div className='miniCard__model'>{bike.model}</div>
                    <div className='miniCard__type'>{bike.bike_type}</div>
                </div>
                <div className='miniCard__price'>$ {bike.price}</div>
            </div>
            
        </Link>
    </div>

  )
}

export default BikeMiniCard
