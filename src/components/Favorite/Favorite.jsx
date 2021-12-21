import React, { useContext } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { favoriteContext } from '../../contexts/favoriteContext';
import FavItem from './FavItem';
import { List } from 'antd';
import {
    HeartOutlined  } from "@ant-design/icons";

const Favorite = () => {
    const {fav, getFav} = useContext(favoriteContext);
    useEffect(() => {
        getFav()
    }, []) 
    return (
        <div>
            <section style={{marginBottom:"50px"}}>
                <div style={{marginLeft:"50px"}}>
                    <h1 className="shopping-cart" style={{fontSize:"42px", fontWeight:"700", marginLeft:"50px", 
                            borderBottom:"1px gray solid", width:"1000px"}}> 
                        My favorite <HeartOutlined/>
                    </h1>
                </div>
                <List style={{marginLeft:"70px", marginRight:"170px"}}
                    itemLayout="vertical"
                    size="large"
                    dataSource={fav?.products}
                    renderItem={(item) => <FavItem item={item}/>} 
                />
            </section>
        </div>
    );
};

export default Favorite;