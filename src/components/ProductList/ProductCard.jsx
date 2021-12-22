import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.css';
import { cartContext } from '../../contexts/cartContext';
import { favoriteContext } from '../../contexts/favoriteContext';

const ProductCard = ({item}) => {
    const {addProductToCart, checkItemInCart} = useContext(cartContext); 
    const {addProductToFav, checkItemInFav} = useContext(favoriteContext)
    const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
    const [checkInFav, setCheckInFav] = useState(checkItemInFav(item.id));
    useEffect(() => {
      setCheckInFav(setCheckInFav(item.id)) 
    },[])
    useEffect(() => {
      setCheckInCart(setCheckInCart(item.id))
    },[])
    return (
        <div className='productlist-cards'>
          <div className='cards' style={{width:"250px", textAlign:"center", color:"white"}}>
          <Link to={`/products/${item.id}`}><img src={item.image} style={{width:"100%"}} alt="" /></Link>
            <div style={{fontSize:"28px"}}>{item.title}</div>
            <div style={{fontSize:"24px"}}>{"$" + item.price}</div>
            <div className='more-icons'>
              <img style={{width:"30px"}} src="https://cdn-icons.flaticon.com/png/128/2273/premium/2273864.png?token=exp=1640108734~hmac=91c3d9f77d0d9e7433ad27f548012d4e" alt="" />
              <img  onClick={() => ( 
                     addProductToCart(item),
                     setCheckInCart(checkItemInCart(item.id)))}  style={{width:"30px"}} src="https://cdn-icons-png.flaticon.com/512/2332/2332013.png" alt="" />
              <Link to={`/products/${item.id}`}><img style={{width:"30px"}} src="https://cdn-icons.flaticon.com/png/512/4152/premium/4152281.png?token=exp=1640108993~hmac=cd8109109772f4be6c879f7a6b29cfc4" alt="" /></Link>
            </div>
          </div>
        </div>
    );
};

export default ProductCard;