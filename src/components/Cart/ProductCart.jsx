import React, { useContext, useEffect } from "react";
import { List } from "antd";
import CartItem from './CartItem';
import { cartContext } from "../../contexts/cartContext";
import './ProductCard.css'
import { Button } from "antd";
import {Link} from 'react-router-dom'

const ProductCart = () => {
    const { cart, getCart } = useContext(cartContext);
    useEffect(() => {
        getCart()
    },[])
    return (
        <div>
            <section className='cart-backparalax'>
                <div style={{marginLeft:"50px"}}>
                <h1 className="shopping-cart" style={{fontSize:"32px", fontWeight:"700", marginLeft:"50px", 
                           borderBottom:"1px gray solid", width:"1000px"}}>
                    Shopping Cart</h1>
                </div>
                <List style={{marginLeft:"70px", marginRight:"170px"}}
                    itemLayout="vertical"
                    size="large"
                    dataSource={cart?.products}
                    footer={
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <h2 className="cart-footer">Total: {cart?.totalPrice}$</h2>
                            <Link to="/check-out">
                                <Button
                                className="chekout-btn"
                                size="large"
                                style={{ margin: "30px 90px", width: "30%", backgroundColor:"#be9a67", color:"white" }}
                            >
                                 BUY
                            </Button>
                            </Link>
                        </div>
                }
                    renderItem={(item) => <CartItem item={item}/>} 
                />
            
            </section>
        </div>
    );
};

export default ProductCart;