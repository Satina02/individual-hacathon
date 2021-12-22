import React, { useReducer } from 'react';
import { calcSubPrice, calcTotalPrice } from '../helpers/calcPrice';

import {CASE_GET_CART} from "../helpers/cases";

export const cartContext = React.createContext()


const INIT_STATE = {
    carter: {},
    cartLength:0,
  };
  
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case CASE_GET_CART:
        return { ...state, carter: action.payload, 
          cartLength: action.payload.products.length };
      default:
        return state;
    }
  };
  
  const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);


    function addProductToCart(product) { 
      let carter = JSON.parse(localStorage.getItem("carter"));
      if (!carter) {
        carter = {
          products: [],
          totalPrice: 0,
        };
      }
      let newProduct = {
        item: product,
        count: 1,
        // subPrice: product.price,
      };  
      console.log(product)
      let filteredCart = carter.products.filter(
        (item) => item.item.id === product.id
      );
      if (filteredCart.length > 0) {
        carter.products = carter.products.filter((item) => item.item.id !== product.id);
      } else {
        carter.products.push(newProduct);
      };
      carter.totalPrice = calcTotalPrice(carter.products);
      localStorage.setItem('cart', JSON.stringify(carter))
      getCart()
    }
    function getCart (){
      let carter = JSON.parse(localStorage.getItem("carter"));
      if (!carter) {
        carter = {
          products: [],
          totalPrice: 0,
        };
      }
      carter.totalPrice = calcTotalPrice(carter.products)
      dispatch({
        type: CASE_GET_CART,
        payload: carter
      })
    }
    function deleteFromCart(id){
        let carter = JSON.parse(localStorage.getItem("carter"));
      if (!carter) {
        carter = {
          products: [],
          totalPrice: 0,
        };
      } 
      carter.products = carter.products.filter((item) => item.item.id !== id)
      localStorage.setItem('cart', JSON.stringify(carter))
      getCart()
    }
    function checkItemInCart(id){
      let carter = JSON.parse(localStorage.getItem("carter"));
      if (!carter) {
        carter = {
          products: [],
          totalPrice: 0,
        };
      }
      let filteredCart = carter.products.filter(
        (item) => item.item.id === id
      );
      return filteredCart.length > 0 ? true : false;
    }
    function changeProductCount(count, id){
      if(count <= 0){
        count = 1
      }
      let carter = JSON.parse(localStorage.getItem('carter'))
      carter.products = carter.products.map((item) => {
        if(item.item.id === id){
          item.count = count
          item.subPrice = calcSubPrice(item )
        }
        return item
      })
      carter.totalPrice = calcTotalPrice(carter.products)
      localStorage.setItem('carter', JSON.stringify(carter))
      getCart()
    }
    return (
      <cartContext.Provider
        value={{
          carter: state.carter,
          cartLength: state.cartLength,
          addProductToCart,
          getCart,
          deleteFromCart,
          checkItemInCart,
          changeProductCount,
        }}
      >
        {children}
      </cartContext.Provider>
    );
  };
  
  export default CartContextProvider;