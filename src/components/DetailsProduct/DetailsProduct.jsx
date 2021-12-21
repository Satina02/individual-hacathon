import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import {Link} from 'react-router-dom'
import { productsContext } from "../../contexts/productsContext";

import { Image, Button, Rate, Tabs } from "antd";
import { LoadingOutlined, HeartFilled } from "@ant-design/icons";

import "./DetailsProduct.css";


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const DetailsProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null);
  // console.log('product', product)
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  // like system
  const [like, setLike] = useState(0),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLike?-0:1));
      setIsLike(isLike);
    };
    // like system


  return (
    <div className="detail-container">
      {product ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ width: "50%" }}>
              <div>
                <Image width="550px" src={product.image} />
              </div>
            </div>
            <div className="detail-info">
              <h2>{product.title}</h2>
              {/* <h4 style={{color:"white"}}>{product.description}</h4> */}
              <h3>{product.price}$</h3> 
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h5>
              <div className={"like-button " + (isLike ? "liked" : "")}
               onClick={onLikeButtonClick}> {<HeartFilled style={{color: "red", fontSize: "25px"}} />} | {like} </div>
              <Rate
                allowHalf
                defaultValue={4.5}
            />
              <div>
                <Link to="/cart">
                <Button
                  className="btn"
                  size="large"
                  style={{
                    margin: "15px",
                    marginLeft: "-1px",
                    width: "40%",
                    // height:"44px",
                    border: "2px solid rgb(11, 139, 135)",
                    color: "#fff",
                    background: "rgb(11, 139, 135)",
                  }}
                >
                  ADD TO CART
                </Button>
                </Link>
                <Button
                  className="btn"
                  size="large"
                  style={{
                    margin: "15px",
                    width: "40%",
                    border: "2px solid rgb(11, 139, 135)",
                    color: "#fff",
                    // height:"44px",
                    background: "rgb(11, 139, 135)",
                  }}
                >
                  MY FAVORITE
                </Button>
                <span>SKU: 009</span>
                <span>Category: Uncategorized</span>
              </div>
            </div>
          </div>

            {/* <div className="bottom-info" >
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Description" key="1">
                  {product.description}
                </TabPane>
                <TabPane tab="Review" key="2">
                </TabPane>
              </Tabs>
            </div> */}
         <div>
         {/* <video src={product.video} width="100%" autoPlay loop muted></video> */}
         </div>
        </>
      ) : (
        <h2>
          <LoadingOutlined style={{display: "flex", alignItems: "center"}}/>
        </h2>
      )}
    </div>
  );
};

export default DetailsProduct;
 