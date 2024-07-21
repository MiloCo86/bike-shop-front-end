// DEPENDENCIES
import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

//img and icons
import closeIcon from '../assets/close_icon.svg'

//css
import '../styles/ShowBike.css';


// COMPONENT
const ShowBike = () => {

  const API = import.meta.env.VITE_BASE_URL;

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
    fetch(`${API}/${id}`)
      .then(res => res.json())
      .then(res => {
        setBike(res);
      })
      .catch(err => console.errer(err))
  }, []);


  return (  
    <div className="bike__container">
      <div className="bike__cardContainer">
        <Link className='bike__closeIcon' to={'/bikes'} ><img  src={closeIcon} alt="close" /></Link>
        <div className="bike__image-container"><img src={bike.img_url}></img></div>
        <div className="bike__details">
          <div className="bike__name">
            <h2>{bike.make} - {bike.model}</h2>
          </div>
          <h3>Spects</h3>
          <div className="bike__spectsAndPrice">
            <div className="bike_spects">
              <p><span>Year:</span> {bike.year}</p>
              <p><span>Type:</span> {bike.bike_type}</p>
              <p><span>Frame:</span> {bike.frame}</p>
              <p><span>Weight:</span> {bike.bike_weight}</p>
            </div>
            <div className="bike_price">
              <h4>Price: ${bike.price}</h4>
              <div className="bike__add-to-cart"><button>Add to Cart</button></div>
            </div>
            
          </div>
          
        </div>
        
      </div>  
    </div>  
  );
}

export default ShowBike
