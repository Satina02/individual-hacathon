import React from 'react';
import './CheckOut.css'
import {Link} from 'react-router-dom';

const CheckOut = () => {
    return (
        <div style={{width:"100%"}}>
            <div style={{textAlign:"center", fontSize:"40px"}}>CHECKOUT</div>
           <section style={{width:"50%", borderTop:"1px solid gray", marginBottom:"30px", marginLeft:"75px"}}>
               <div style={{fontSize:"20px", marginTop:"15px"}}>1. THE BASICS</div>
               <div className='payment-inputs'>
                   <div style={{marginTop:"15px"}}>
                        <div>E-MAIL *</div>
                        <input className="one-input" type="text" />
                   </div>
                   <div style={{display:"flex", width:"90%", justifyContent:"space-between", marginTop:"15px"}}>
                        <div style={{width:"45%"}}>
                            <div>FIRST NAME *</div>
                            <input className='two-input' type="text" />
                        </div>
                        <div style={{width:"45%"}}>
                            <div>LAST NAME </div>
                            <input className='two-input' type="text" />
                        </div>
                   </div>
                   <div style={{marginTop:"15px"}}>
                        <div>PHONE NUMBER *</div>
                        <input className="one-input" type="number" />
                   </div>
                   <div style={{marginTop:"15px"}}>
                        <div>ADDRESS 1 *</div>
                        <input className="one-input" type="text" />
                   </div>
                   <div style={{marginTop:"15px"}}>
                        <div>ADDRESS 2</div>
                        <input className="one-input" type="text" />
                   </div>
                   <div style={{display:"flex", width:"90%", justifyContent:"space-between", marginTop:"15px"}}>
                        <div style={{width:"45%"}}>
                            <div>CITY *</div>
                            <input className='two-input' type="text" />
                        </div>
                        <div style={{width:"45%"}}>
                            <div>ZIP CODE *</div>
                            <input className='two-input' type="text" />
                        </div>
                   </div>
                   <div style={{marginTop:"15px"}}>
                        <div>COUNTRY</div>
                        <input className="one-input" type="text" />
                   </div>
               </div>
               <div style={{textAlign:"center", marginTop:"30px"}}>
               <Link to="/payment-card"><button style={{width:"50%", height:"55px", cursor:"pointer", 
                     backgroundColor:"#00081C", color:"#CDBC7A", boeder:"none", outline:"none"}}>CONTINUE
                     </button>
                </Link>
               </div>
           </section>
           <section style={{width:"40%"}}></section>
        </div>
    );
};

export default CheckOut;