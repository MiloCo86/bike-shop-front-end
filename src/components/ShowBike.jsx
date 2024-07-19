// DEPENDENCIES
import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import '../styles/ShowBike.css';

const API = import.meta.env.VITE_BASE_URL;

// COMPONENT
const ShowBike = () => {

  //STATE
  const [ bike, setBike ] = useState({
        make: "",
        model: "",
        year: 0,
        price: 0,
        bike_type: "",
        frame: "",
        bike_weight: 0,
        is_new: false,
        in_stock: 0,
        img_url: "",
  });

  let navigate = useNavigate();
  const { id } = useParams();
  

  // On load

  useEffect(() => {
    fetch(`${API}/bikes/${id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setBike(res);
      })
      .catch(err => console.errer(err))
  }, []);


  return (
    
    <div className="bike__container">
      <div className="bike__image-container"><img src={bike.img_url}></img></div>
      <div className="bike__details">
        <p>{bike.model}</p>
        <p>{bike.manufacturer}</p>
        <p>{bike.is_new}</p>
        <p>{bike.price}</p>
        <button>Delete</button>
        <button>Edit</button>
      </div>
      <div className="bike__add-to-cart"><button>Add to Cart</button></div>
    </div>
    
  );
}

export default ShowBike
