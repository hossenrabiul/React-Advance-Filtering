import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import './slidber.css'
const Slidber = ({handleChange}) => {
  
    return (
        <div className='slidber'>
            <h1 className='slidber-title'><FaCartPlus/> </h1>

            <div className="logo-container">
                <Category handleChange={handleChange}/>
                <Price handleChange={handleChange}/>
                <Colors handleChange={handleChange}/>
            </div>
        </div>
    );
};

export default Slidber;