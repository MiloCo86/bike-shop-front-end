// DEPENDENCIES
import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

//img and icons
import closeIcon from '../assets/close_icon.svg'
import editIcon from '../assets/edit_75dp_.svg'
import deleteIcon from '../assets/delete_75dp.svg'

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

  // hanlde delete request

  const handleDelete = () => {
    fetch(`${API}/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(res => navigate('/bikes'))
    .catch(err => console.error(err))
  };


  return (  
    <div className="bike__container">
      <div className="bike__cardContainer">
        <div className='bike__edit-delete'> 
          <Link to={`/bikes/${id}/edit`}> <img src={editIcon}></img> </Link>
          
          <img src={deleteIcon} onClick={handleDelete}></img>
        </div>
        
        <Link className='bike__closeIcon' to={'/bikes'} ><img  src={closeIcon} alt="close" /></Link>
        
        <div className="bike__image-container"><img src={bike.img_url}></img></div>
        <div className="bike__details">
          <div className="bike__name">
            <h2>{bike.make} - {bike.model}</h2>
          </div>
          <h3>Spects</h3>
          <div className="bike__spectsAndPrice">
            <div className="bike__spects">
              <p><span>Year:</span> {bike.year}</p>
              <p><span>Type:</span> {bike.bike_type}</p>
              <p><span>Frame:</span> {bike.frame}</p>
              <p><span>Weight:</span> {bike.bike_weight}</p>
            </div>
            <div className="bike__price">
              <h4>Price: <span>${bike.price}</span></h4>
              <button className="bike__add-to-cart">Add to Cart</button>
            </div>
            
          </div>
          
        </div>
        
      </div>  
    </div>  
  );
}

export default ShowBike
