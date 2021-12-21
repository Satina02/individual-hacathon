import React, { useReducer } from 'react';
import {CASE_GET_FAV} from "../helpers/cases";

export const favoriteContext = React.createContext()


const INIT_STATE = {
    fav: {},
};
   
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case CASE_GET_FAV:
        return { ...state, fav: action.payload};
      default:
        return state;
    }
  };
  
  const FavContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);


    function addProductToFav(product) {
      let fav = JSON.parse(localStorage.getItem("fav"));
      if (!fav) {
        fav = {
          products: [],
        };
      }
      let newProduct = {
        item: product,
        count: 1,
      };
      let filteredFav = fav.products.filter(
        (item) => item.item.id === product.id
      );
      if (filteredFav.length > 0) {
        fav.products = fav.products.filter((item) => item.item.id !== product.id);
      } else {
        fav.products.push(newProduct);
      };
      localStorage.setItem('fav', JSON.stringify(fav))
      getFav()
    }
    function getFav (){
      let fav = JSON.parse(localStorage.getItem("fav"));
      if (!fav) {
        fav = {
          products: []
        };
      }
      dispatch({
        type: CASE_GET_FAV,
        payload: fav
      })
    }
    function deleteFromFav(id){
        let fav = JSON.parse(localStorage.getItem("fav"));
      if (!fav) {
        fav = {
          products: [],
        };
      }
      fav.products = fav.products.filter((item) => item.item.id !== id)
      localStorage.setItem('fav', JSON.stringify(fav))
      getFav()
    }
    function checkItemInFav(id){
      let fav = JSON.parse(localStorage.getItem("fav"));
      if (!fav) {
        fav = {
          products: []
        };
      }
      let filteredFav = fav.products.filter(
        (item) => item.item.id === id
      );
      return filteredFav.length > 0 ? true : false;
    }
    return (
      <favoriteContext.Provider
        value={{
          fav: state.fav,
          addProductToFav,
          getFav,
          deleteFromFav,
          checkItemInFav,
        }}
      >
        {children}
      </favoriteContext.Provider>
    );
  };
  
  export default FavContextProvider;