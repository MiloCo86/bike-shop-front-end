import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//components
import BikeMiniCard from './BikeMiniCard'

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
                            <BikeMiniCard bike={newBike} />
                        </div>
                )
                })
        }
            </div>
            
        </div>
    )
}

export default Bikes
