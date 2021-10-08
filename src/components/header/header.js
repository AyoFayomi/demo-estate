import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import './header.css'
import { Turn as Hamburger } from 'hamburger-react'

function Header() {
    const [active,  setActive] = useState(false);

    return (
        <nav>
            <div className="navBar">
                <div className="navWrap">
                <Link to="/" className="nav-img"><img src="https://res.cloudinary.com/mama-s-market/image/upload/v1603542586/real-estate/logo_pgpiae.png" alt="" /></Link>
                    <nav className="navigation">
                        <Link to="/">Find Property</Link>
                        <Link to="/Expense_Tracker" >Listed Properties</Link>
                        <Link to="#/">Store</Link>
                    </nav>
                    <div className="navbtnswrap">
                        <Link to="#/"><i className="fa fa-cart-plus cart" aria-hidden="true"></i></Link>
                        <div className="reg">
                            <Link to="#/">Log In</Link>
                            <Link to="#/"><button className="navBtn">Sign Up</button></Link>
                        </div>
                        <Hamburger onToggle={toggled => {
                            if (toggled) {
                                // open a menu
                                setActive(true)
                            } else {
                                setActive(false)
                            } 
                            }
                        }/>
                    </div>
                </div>    
            </div>
            <div className={`sideNav ${ active ? "active" : ""}`}>
                <nav className="navigation">
                    <Link to="#/">Find Property</Link>
                    <Link to="/Expense_Tracker" >Listed Properties</Link>
                    <Link to="#/">Store</Link>
                </nav>
                <div className="reg">
                    <Link to="#/">Log In</Link>
                    <Link to="#/"><button className="navBtn">Sign Up</button></Link>
                </div>
            </div>
        </nav>     
    )
}

export default Header;
