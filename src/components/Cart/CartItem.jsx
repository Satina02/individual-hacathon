import React , { useContext } from 'react';
import { InputNumber, List, Button } from "antd";
import { cartContext } from '../../contexts/cartContext';
import './CartItem.css'

const CartItem = ({item}) => {
  const {deleteFromCart, changeProductCount} = useContext(cartContext);


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
        description={<>
        <div>
        <div style={{display:"flex", justifyContent:"space-between", width:"40%", marginTop:"20px"}}>
            <h4>Quality</h4>
                <Button onClick={() => changeProductCount(item.count -1, item.item.id)}>-</Button>
                <InputNumber style={{backgroundColor:"#be9a67", color:"white", textAlign:"center"}} value={item.count} disabled/>
                <Button onClick={() => changeProductCount(item.count +1, item.item.id)}>+</Button>
            </div>
           <div style={{display:"flex"}}>
                <h4 style={{marginRight:"100px"}}>SubPrice</h4>
                <h3>{"$" + item.subPrice}</h3>
            </div>
        </div>
        <Button onClick={() => deleteFromCart(item.item.id)}>Remove from Item</Button>
        </>} 
      />
    </List.Item>
    
        </div>
    );
};

export default CartItem;