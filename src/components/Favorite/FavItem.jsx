import React, { useContext, useState } from 'react';
import { List, Button } from "antd";
import { favoriteContext } from '../../contexts/favoriteContext';
import { cartContext } from '../../contexts/cartContext';

const FavItem = ({item}) => {
    const {addProductToCart, checkItemInCart} = useContext(cartContext); 
    const {deleteFromFav} = useContext(favoriteContext);
    const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
    return (
        <div>
           <List.Item
                key={item.id}
                extra={
                    <img
                    style={{width:"250px", height:"200px"}}
                    width={272}
                    alt="image"
                    src={item.item.image}
                    />
                }
            >
           <List.Item.Meta
                title={
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <div><h3>{item.item.title} </h3>
                    <h4>{item.item.ingredients}</h4></div>
                    <h3>{"$" + item.item.price}</h3>
                    </div>}
                description={
                    < div style={{display:"flex"}}>
                    <Button danger style={{marginRight:"40px"}} onClick={() => deleteFromFav(item.item.id)}>Remove from Favorite</Button>
                    <Button onClick={() => addProductToCart(item)}>Add to Cart</Button>
                    </div>
                } 
            />
            </List.Item>
        </div>
    );
};

export default FavItem;