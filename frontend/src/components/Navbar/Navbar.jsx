import React, { useContext } from "react";
import './navbar.css';
import logo from '../assets/logo.png';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    const { totalCartItems } = useContext(ShopContext);

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
                <div>
                    <p className="cname">Pabs Fashion</p>
                    <div className="slogan-box">
                        <p className="slogan"><b>Look Good Feel Well</b></p>
                    </div>
                </div>
            </div>
            <div>
                <ul className="menu">
                    <NavLink to="/shop" className="nav-link" activeclassname="active">Shop</NavLink>
                    <NavLink to="/men" className="nav-link" activeclassname="active">Men</NavLink>
                    <NavLink to="/women" className="nav-link" activeclassname="active">Women</NavLink>
                    <NavLink to="/kids" className="nav-link" activeclassname="active">Kids</NavLink>
                </ul>
            </div>
            <div className="searchbar">
                <input type="text" placeholder="search here" />
                <button><FaSearch className="searchicon" /></button>
            </div>
            <div className="user-element">
                {localStorage.getItem('auth-token')
                    ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button> :
                    <NavLink to="/login" className="loginbtn" ><button>Login</button></NavLink>
                }
                <NavLink to="/cart" className="cart-icon"><FaShoppingCart /></NavLink>
                <div className="cart-count">{totalCartItems()}</div>
            </div>
        </div >
    );

}

export default Navbar;