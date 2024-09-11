import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
   const handleActive= ({isActive})=>{
        return ( isActive ? "nav-link pactive":"nav-link")

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid ">
                    <a className="navbar-brand" to="#">Step form</a>
                   
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-center pages " >
                            <li className="nav-item">
                                <NavLink className={handleActive} aria-current="page" to="/">Personal details</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={handleActive} to="address">addresses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={handleActive} to="payment">payment details</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
