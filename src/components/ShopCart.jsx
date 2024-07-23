import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

//components
import ShopCartItem from './ShopCartItem';

//icons


//css
import '../styles/ShopCart.css'




const ShopCart = () => {

  const [shopCartElements, setShopCartElements] = useState([])
  const [sortedElements, setSortedElements] = useState([])
  const [total, setTotal] =useState(0)
  const [updateCart, setUpdateCar] = useState(false)
  const API = import.meta.env.VITE_SHOPCART_URL

  useEffect(()=>{
    
    fetch(API)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setShopCartElements(res)
      })
      .catch(err => console.error(err))
  },[])

  useEffect(()=>{
    setTotal(shopCartElements.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity),
        0,))
  },[shopCartElements, updateCart])

  useEffect(()=>{
    setSortedElements(shopCartElements.sort((a,b)=> a.txn_id - b.txn_id))
  },[shopCartElements, updateCart])

  const handleUpdate = () =>{
    setUpdateCar(!updateCart)
  }

  return (
    <div className='shopCart__container'>
        <h2>SHOP CART</h2>
        <form className='shopCart__form' action="">
          <div className="shopCart__items">
          { sortedElements.map((shopItem, idx) =>{
            return (
                <div key={idx}>
                    <ShopCartItem shopItem={shopItem} />
                </div>
              )
            })
          }
          </div>
          <div className="shopCart__total">
            <h3>TOTAL:</h3>
            <div className="shopCart__totalPrice"> $ {total}</div>
          </div>
          <button className='shopCart__btn'>Checkout</button>
          <div className="shopCart__empty">empty ShopCart</div>
        </form>
    </div>
  )
}

export default ShopCart
