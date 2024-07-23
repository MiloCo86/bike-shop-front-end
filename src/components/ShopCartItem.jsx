import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

//icons
import deleteIcon from '../assets/delete_75dp.svg'

//css
import '../styles/ShopCartItem.css'

const ShopCartItem = ({shopItem}) => {

    let navigate = useNavigate();

    const [item, setItem] = useState({
        id: shopItem.id,
        make: shopItem.make,
        model: shopItem.model,
        price: shopItem.price,
        img_url: shopItem.img_url,
        quantity: shopItem.quantity
    })

    const API = import.meta.env.VITE_SHOPCART_URL
        
    const handleChange = (e) => {
        if(e.target.value>=1){
            setItem((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value }
            })

            fetch(`${API}/${shopItem.txn_id}`, {
                method: "PUT",
                body: JSON.stringify(item),
                headers: {
                  "Content-Type": "application/json"
                }
              })
                .then(res => res.json())
                .then(res => {
                  if(res.error){
                    alert(res.error)
                  }else{
                    
                  }
                })
                .catch(err => console.error(err))
        }
        
    }

    const handleDelete = () => {
      if(window.confirm('Are you sure you want to delete?')){
          fetch(`${API}/${shopItem.txn_id}`, {
              method: 'DELETE',
            })
          .then(res => res.json())
          .then(res => {
            window.location.reload()
          })
          .catch(err => console.error(err))   
      }
    };
    

  return (
    <div className='item__container' >
        <label htmlFor="quantity">Qty</label>
        <input type="number" value={item.quantity} name='quantity' onChange={handleChange}/>
        <img className='item_miniIMG' src={item.img_url} alt="" />
        <p className='item__name'>{item.make} {item.model}</p>
        <p className="item__price">${item.price}</p>
        <img className='item_delIcon' src={deleteIcon} alt="" onClick={handleDelete} />
    </div>
  )
}

export default ShopCartItem
