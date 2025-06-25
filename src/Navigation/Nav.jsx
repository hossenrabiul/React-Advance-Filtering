import React from 'react';
import './Nav.css'
import { FiHeart } from 'react-icons/fi';
import { AiOutlineUserAdd} from 'react-icons/ai'
import { CiShoppingCart } from "react-icons/ci";
const Nav = ({handleInputChange}) => {
    return (
        <nav>
            <div className="nav-container">
                <input onChange={handleInputChange} type="text" placeholder='Enter your search shoes' className='search-input' name="" id="" />
            </div>
            <div className="profile-container">
                <a href="">
                    <FiHeart className='nav-icons'></FiHeart>
                </a>
                <a href="">
                    <CiShoppingCart className='nav-icons'></CiShoppingCart>
                </a>
                <a href="">
                    <AiOutlineUserAdd className='nav-icons'></AiOutlineUserAdd>
                </a>
            </div>
        </nav>
    );
};

export default Nav;