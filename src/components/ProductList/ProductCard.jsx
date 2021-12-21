import React, { useContext, useEffect, useState } from 'react';
import {Card} from 'antd';
import { Link } from 'react-router-dom';
import {
    ShoppingCartOutlined,
    EllipsisOutlined,
    HeartOutlined,
  } from "@ant-design/icons";
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
            <Card
            hoverable
            // key={item.id}
            className='productlist-csrd'
            style={{ width: "250px", margin: "10px" }}
            cover={<img style={{width:"250px", height:"200px"}} alt="example" src={item.image} />}
            actions={[

              
              <HeartOutlined  style={{ color: checkInFav? "red" : "black", fontSize: "25px" }}
                    onClick={() => (
                      addProductToFav(item),
                      setCheckInFav(checkItemInFav(item.id))
                    )} />,
              <ShoppingCartOutlined
                style={{ color: checkInCart ? "#be9a67" : "black", fontSize: "25px" }}
                 onClick={() => ( 
                     addProductToCart(item),
                     setCheckInCart(checkItemInCart(item.id))
                 )}

              />,
              <Link to={`/products/${item.id}`}>
                <EllipsisOutlined
                  style={{ color: "black", fontSize: "25px" }}
                  key="ellipsis"
                />
              </Link>,
            ]}
          >
            <Card.Meta
              title={<h3 className='productCard-title'>{item.title}</h3>}
              description={
                <>
                  {/* <h3>{item.ingredients}</h3> */}
                  <h2 className='productCard-price' style={{color:"#be9a67"}}>{"$" + item.price}</h2>
                </>
              }
            />
          </Card>
        </div>
    );
};

export default ProductCard;