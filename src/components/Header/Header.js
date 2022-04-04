import React from 'react';
import {NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/Home'>Home</NavLink>
            
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/Reviews'>Reviews</NavLink>

            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/DashBoard'>DashBoard</NavLink>

            <NavLink  className={({ isActive }) => (isActive ? "active-link" : "link")}to='/Blogs'>Blogs</NavLink>

            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}to='/About'>About</NavLink>
        </nav>
    );
};

export default Header;