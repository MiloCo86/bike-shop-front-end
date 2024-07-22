import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//components
import BikeMiniCard from './BikeMiniCard'

//img and icons

import addIcon from '../assets/add_new_icon.svg'

import '../styles/Bikes.css'

const Bikes = ({evaluator}) => {

    
    const [showBikes, setShowBikes] = useState([])
    const API = import.meta.env.VITE_BASE_URL
    const [title, setTitle] = useState('All Bikes')
    
  
    useEffect(()=>{
        let url = API
        console.log(evaluator)
        if(evaluator=='new'){
            url= API + '/new'
            setTitle('New Bikes')
        }else if(evaluator=='used'){
            url= API + '/used'
            setTitle('Used Bikes')
        } else if (evaluator==undefined){
            url= API
            setTitle('All Bikes')
        }
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setShowBikes(res)
            })
            .catch(err => console.error(err))
    },[evaluator])

    

    const handleSort = (e)=>{
        const sortBikes = [...newBikes]
    
        switch(e.target.value){
            case "low":
                setNewBikes(sortBikes.sort((a,b)=>a.price -b.price))
                break;
            case "high":
                setNewBikes(sortBikes.sort((a,b)=>b.price -a.price))
                break;
            case "make":
                setNewBikes(sortBikes.sort((a,b)=>{
                    if(a.make < b.make) { return -1; }
                    if(a.make > b.make) { return 1; }
                    return 0;
                }))
                break;
            case "type":
                setNewBikes(sortBikes.sort((a,b)=>{
                    if(a.bike_type < b.bike_type) { return -1; }
                    if(a.bike_type > b.bike_type) { return 1; }
                    return 0;
                }))
                break;   
        }
    }

    return (
        <div className='showBikes__container'>
            <div className="showBikes__topBar">
                                
                <div className="showBikes__sortMenu_area">
                    <select className='showBikes__sort' name="sort" id="sort" onChange={handleSort}>
                    <option value="" hidden>Filter by</option>
                    <option value="low">Price (low to high)</option>
                    <option value="high">Price (high to low)</option>
                    <option value="make">Make </option>
                    <option value="type">Type </option>
                    </select>
                </div>

                <div className="showBikes__title">
                    {title}
                </div>
                
                <Link to={'/bikes/add'} className={`showBikes__addBike ${evaluator !== undefined ? 'hidden' : ''}`}>
                    <img src={addIcon} alt="" />
                    <p className='showBikes__addNewBike-text'>Add <br />New Bike</p>
                </Link>

            </div>
            <div className="showBikes__cardContainer">
                {showBikes.map((newBike, idx) =>{
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
