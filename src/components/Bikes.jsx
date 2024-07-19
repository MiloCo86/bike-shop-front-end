import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Bikes.css'

const Bikes = () => {
    
    const [newBikes, setNewBikes] = useState([])
    const API = import.meta.env.VITE_BASE_URL
  
    useEffect(()=>{
        fetch(API)
            .then(res => res.json())
            .then(res => {
                setNewBikes(res)
            })
            .catch(err => console.error(err))
    },[])

    return (
        <div className='newBikes__container'>
            <div className="newBikes__topBar">
                <div className="newBikes__title">
                New Bikes!
                </div>
                <div className="newBikes__SortMenu">
                    sort
                </div>
            </div>
            <div className="newBikes__cardContainer">
                { newBikes.map((newBike, idx) =>{
                    return (
                        <div key={idx}>
                            <Link className='bike_card' to={`/bikes/${idx}`}>
                                <img src={newBike.img_url} alt="" />
                                <div>{newBike.make}</div>
                                <div>{newBike.model}</div>
                                <div>$ {newBike.price}</div>
                            </Link>
                        </div>
                )
                })
        }
            </div>
            
        </div>
    )
}

export default Bikes
