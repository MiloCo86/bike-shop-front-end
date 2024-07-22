import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//components
import BikeMiniCard from './BikeMiniCard'

//img and icons

import addIcon from '../assets/add_new_icon.svg'

import '../styles/Bikes.css'

const Bikes = ({evaluator}) => {

    
    const [newBikes, setNewBikes] = useState([])
    const API = import.meta.env.VITE_BASE_URL
    const [title, setTitle] = useState('Bikes!')
    
  
    useEffect(()=>{
        let url = API
        if(evaluator=='new'){
            url= API + '/new'
            setTitle('New Bikes!')
        }else if(evaluator=='used'){
            url= API + '/used'
            setTitle('Used Bikes!')
        }
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setNewBikes(res)
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
        <div className='newBikes__container'>
            <div className="newBikes__topBar">
                                
                <div className="newBikes__sortMenu_area">
                    <select className='newBikes__sort' name="sort" id="sort" onChange={handleSort}>
                    <option value="" hidden></option>
                    <option value="low">Price (low to high)</option>
                    <option value="high">Price (high to low)</option>
                    <option value="make">Make </option>
                    <option value="type">Type </option>
                    </select>
                </div>

                <div className="newBikes__title">
                    {title}
                </div>
                
                <Link to={'/bikes/add'} className="newBikes__addBike">
                    <img src={addIcon} alt="" />
                    <p className='newBikes__addNewBike-text'>Add <br />New Bike</p>
                </Link>

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
