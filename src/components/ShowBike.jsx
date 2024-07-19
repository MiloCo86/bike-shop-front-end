// DEPENDENCIES
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/ShowBike.css'

// COMPONENT
const ShowBike = () => {

  //STATE
  const [ usedBikes, setUsedBikes ] = useState([]);
  const API = import.meta.env.VITE_BASE_URL;

  // useEffect

  useEffect(() ={
    fetch(API)
      .then(res => res.json())
      .then(res => {
        setUsedBikes(res)
      })
      .catch(err => console.errer(err))
  }, []);

  return (
    <div className='showBike__container'>
      
    </div>
  )
}

export default ShowBike
