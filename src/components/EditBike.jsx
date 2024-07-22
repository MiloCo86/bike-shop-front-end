import React from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import '../styles/EditBike.css'

//img and icons
import closeIcon from '../assets/close_icon.svg'

const EditBike = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const API = import.meta.env.VITE_BASE_URL;

  const [updateBike, setUpdateBike] = useState({
    make: "",
    model: "",
    year: 0,
    price: 0,
    bike_type: "",
    frame: "",
    bike_weight: 0,
    is_new: false,
    in_stock: 0,
    img_url: ""
  })

  const handleChange = (e) => {
    setUpdateBike((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  const handleCheckBox = (e) => {
    setUpdateBike((prevState) => {
      const isNew = !updateBike.is_new
      return { ...prevState, is_new: isNew }
    })
  }

  const formatBike = (bike) => {
    bike.year = Number(bike.year)
    bike.price = Number(bike.price)
    bike.bike_weight = Number(bike.bike_weight)
    bike.in_stock = Number(bike.in_stock)

    return bike
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formatedBike = formatBike(updateBike)
    fetch(`${API}/${id}`, {
      method: "PUT",
      body: JSON.stringify(formatedBike),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if(res.error){
          alert(res.error)
        }else{
        navigate(`/bikes/${id}`)
        }
      })
      .catch(err => console.error(err))
  }

  // On page load, form with bike's current data
  useEffect(() => {
      fetch(`${API}/${id}`)
        .then(res => res.json())
        .then(res => {
          setUpdateBike(res)
        })
        .catch(err => console.error(err))
  }, [API, id])

  return (
    <div className='updateBike__container'>
      <h2 className='updateBike__header'>edit bike</h2>
      <form className='updateBike__form' onSubmit={handleSubmit}>
        <Link className='updateBike__closeIcon' to={'/bikes'} ><img  src={closeIcon} alt="close" /></Link>
        <div className="updateBike__fields">
          <input 
            className='updateBike__input'
            type="text"
            name="make"
            placeholder='Ex: Canondale'
            value={updateBike.make}
            onChange={handleChange}
            required 
          />
          <label className='updateBike__label' htmlFor="make">Make:</label>
        </div>

        <div className="updateBike__fields">
          <input 
            className='updateBike__input'
            type="text"
            name="model"
            placeholder='Ex: Synapse'
            value={updateBike.model}
            onChange={handleChange} 
            required
          />
          <label className='updateBike__label' htmlFor="model">Model:</label>
        </div>

        <div className="updateBike__fields">
          <input 
            className='updateBike__input'
            type="number"
            name="year"
            placeholder='Enter year'
            value={updateBike.year}
            onChange={handleChange} 
          />
          <label className='updateBike__label' htmlFor="year">Year:</label>
        </div>

        <div className="updateBike__fields">
          <input 
            className='updateBike__input'
            type="number"
            name="price"
            placeholder='Enter price'
            value={updateBike.price}
            onChange={handleChange}
            required
          />
          <label className='updateBike__label' htmlFor="price">Price:</label>
        </div>

        <div className="updateBike__fields">
          <input 
            className='updateBike__input'
            type="text"
            name="bike_type"
            placeholder='Road, Mountain, etc.'
            value={updateBike.bike_type}
            onChange={handleChange} 
          />
          <label className='updateBike__label' htmlFor="bike_type">Bike Type:</label>
        </div>

        <div className="updateBike__fields">
          <input 
            className='updateBike__input'
            type="text"
            name="frame"
            placeholder='Aluminum, Carbon, etc.'
            value={updateBike.frame}
            onChange={handleChange} 
          />
          <label className='updateBike__label' htmlFor="frame">Frame:</label>
        </div>

        <div className="updateBike__fields">
          <input 
            className='updateBike__input'
            type="number"
            name="bike_weight"
            placeholder='Weight in Kg'
            value={updateBike.bike_weight}
            onChange={handleChange} 
          />
          <label className='updateBike__label' htmlFor="bike_weight">Weight:</label>
        </div>

        <div className="updateBike__fields">
          <input 
            className='updateBike__input updateBike_checkBox'
            type="checkbox"
            name="is_new"
            value={updateBike.is_new}
            onChange={handleCheckBox} 
          />
          <label className='updateBike__label' htmlFor="is_new">Is New:</label>
        </div>

        <div className="updateBike__fields">
          <input 
            className='updateBike__input'
            type="number"
            name="in_stock"
            value={updateBike.in_stock}
            onChange={handleChange} 
            required
          />
          <label className='updateBike__label' htmlFor="in_stock">In Stock:</label>
        </div>

        <div className="updateBike__fields">
          <input 
            className='updateBike__input'
            type="text"
            name="img_url"
            placeholder='Enter img url'
            value={updateBike.img_url}
            onChange={handleChange} 
          />
          <label className='updateBike__label' htmlFor="img_url">Img Url:</label>
        </div>

        <button className='updateBike__submitBTN'>Submit</button>
      </form>
    </div>
  ) 
}

export default EditBike
