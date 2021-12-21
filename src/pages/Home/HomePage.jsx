import React from "react";
import './HomePage.css'
import { Carousel } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const HomePage = () => { 
    return (
        <div className='homepage-main'>
            <section>
                <div className='homepage-carousel'>
                    <div className='homepage-carousel-left'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/slider-image-.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/slider-image-2.jpg"
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/slider-image-3.jpg"
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div>
                        <div style={{display:"flex"}}>
                            <p style={{color:"#65c1be"}}>Lorem ipsum dolor sit</p>
                            <img style={{marginTop:"-39px"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/sidearea-image.png" alt="" />
                        </div>
                        <p style={{color:"white", letterSpacing:"4.5px", fontSize:"13px"}}>HOMEMADE TREATS</p>
                        <h1 className='homepage-firstSection-h1'>Ice <br /> cream <br /> shop</h1>
                        <div>
                            <Link to="/shop"><button className='view-more-btn'>VIEW MORE</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='homepage-second-section'>
                <div className='second-section'>
                    <div className='second-section-left'>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ins sen labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla mco de laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr ehenderit . Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                    </div>
                    <div className='second-section-right'>
                        <div style={{fontSize:"60px", fontWeight:"800"}}>Open:</div> 
                        <div style={{fontSize:"21px"}}>Mon – Fri: 9:00 am – 8:00 pm </div>
                        <div style={{fontSize:"21px"}}>Sat – Sun: 9:00 am – 10 pm</div> 
                    </div> 
                </div>
            </section>
            <section className='homepage-third-section'>
                <div style={{display:"flex", width:"100%", justifyContent:"space-around"}}>
                    <div className='homepage-blocks'>
                        <img style={{width:"100%"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/home-image-1.jpg" alt="" />
                        <div style={{textAlign:"center"}}>
                            <div className='third-section-title'>Orders</div>
                            <div style={{color:"white"}}>Lorem ipsum dolor sit amet cons tetur adipisicing elit sed noi</div>
                            <div style={{color:"white", marginTop:"30px", fontSize:"13px", cursor:"pointer"}}>VIEW MORE</div>
                        </div>
                    </div>
                    <div className='homepage-blocks'>
                        <img style={{width:"100%"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/home-image-2.jpg" alt="" />
                        <div style={{textAlign:"center"}}>
                            <div className='third-section-title'>Flavors</div>
                            <div style={{color:"white"}}>Lorem ipsum dolor sit amet cons tetur adipisicing elit sed noi</div>
                            <div style={{color:"white", marginTop:"30px", fontSize:"13px", cursor:"pointer"}}>VIEW MORE</div>
                        </div>
                    </div>
                    <div className='homepage-blocks'>
                        <img style={{width:"100%"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/home-image-3.jpg" alt="" />
                        <div style={{textAlign:"center"}}>
                            <div className='third-section-title'>Our process</div>
                            <div style={{color:"white"}}>Lorem ipsum dolor sit amet cons tetur adipisicing elit sed noi</div>
                            <div style={{color:"white", marginTop:"30px", fontSize:"13px", cursor:"pointer"}}>VIEW MORE</div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default HomePage;
