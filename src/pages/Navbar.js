import React, { Fragment, useState } from 'react';
import '../Style/navbar.css';
import logo from '../image/logo.png';
import login from '../svg/login.svg';
import cart from '../svg/cart.svg';


  const Navbar = () => {
   const [showNav,setshowNav] = useState(false)
   const handleToggleNavbar = () =>{
     setshowNav(!showNav)
   }
    
  return (
    <Fragment>
     
    <div className="navbar">
    <div className="companylogo">
      <img src={logo} className="logo"  alt="logo"/>
    </div>
    <div className="option">
      <ul className="desktopview">
        <li className="navbarList">Open packs</li>
        <li className="navbarList">Shop</li>
        <li className="navbarList">MarketPlace</li>
        <li className="navbarList">All Collectibles</li>
        <li className="navbarList">All Collection</li>
        <div className='logolist'>
        <li className="navbarList"><img src={login} className="Alogo" alt="login"/></li>
        <li className="navbarList"><img src={cart} className="Alogo" alt="cart"/></li>
        </div>
      </ul>
    </div>
    <div className="toggleBtn" onClick={()=> handleToggleNavbar()}>
      <button className="btnm">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      </button>
    </div>
    </div>
    <div className={`togglecontent ${showNav ? "" : "d-none"}`}>
    <ul className="desktopView">
        <li className="navbarList">Open packs</li>
        <li className="navbarList">Shop</li>
        <li className="navbarList">MarketPlace</li>
        <li className="navbarList">All Collectibles</li>
        <li className="navbarList">All Collection</li>
      </ul>
    </div>
    
    
    </Fragment>
  )
}
export default Navbar; 