import React, { Fragment } from 'react'
import '../Style/footer.css';
import logo from "../image/logo.png";
import telegram from "../svg/telegram.svg";
import twitter from "../svg/twitter.svg";
import facebook from "../svg/facebook.svg";
import instagram from "../image/instagram.png";

const Footer = () => {
  return (
      <Fragment>
    <div className="footer-section">
                <div className="footer-content">
                    <div className="footer-part1">
                        <ul className="footer-ul">
                            <li>
                                <div className="company-logo">
                                <img src={logo} className="com-logo"/>
                                </div>
                            </li>
                            <div>
                            <div className='social-section'>
                            <h3 className="sm-heading">Follow us on social media</h3>
                            <li className="sm-logo">
                                <img src={telegram}/>
                                <img src={twitter}/>
                                <img src={facebook}/>
                                <img src={instagram}/>
                            </li>
                            </div>
                            </div>
                        </ul>
                    </div>
                    <div className="footer-part2">
                        <div className="list-items">
                            <div className="iteams-1">
                        <ul className="footer-ul ">
                            <li className="list-heading">MarketPlace</li>
                            <li className="list-content">Shop</li>
                            <li className="list-content">Open Packs</li>
                            <li className="list-content">Marketplace</li>
                            <li className="list-content">All Collectibles</li>
                            <li className="list-content">My Collections</li>
                        </ul>
                        </div>
                    <div className="iteams-2">
                        <ul className="footer-ul">
                            <li className="list-heading">MyAccount</li>
                            <li className="list-content">Profile </li>
                            <li className="list-content">Vault</li>
                            <li className="list-content">Favorites</li>
                            <li className="list-content">Listings</li>
                            <li className="list-content">Account Setting</li>
                        </ul>
                    </div>
                    <div className="iteams-3">
                        <ul className="footer-ul">
                            <li className="list-heading">Company</li>
                            <li className="list-content">About</li>
                            <li className="list-content">Help Center</li>
                            <li className="list-content">Career</li>
                            <li className="list-content">Blog</li>                    
                        </ul>
                    </div>
                    
                </div>
                </div>
                
            </div>
            </div> 
           
            
                
            <hr/>
                <div className="bottom-part">
                     
                        <h3 className="term">© 2021 OW3NS</h3>
                        <div className="term-iteam">
                            <h2 className="term">Privacy Policy</h2>
                            <h2 className="term">Terms of Services</h2>
                        </div>
                </div>
               
            
    </Fragment>
            
  )
}

export default Footer;