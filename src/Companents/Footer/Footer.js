import React from 'react';
import { NavLink } from 'react-router-dom';
import footer1 from '../images/Footer1.jpeg'
import footer2 from '../images/Footer2.jpeg'
import footer3 from '../images/Footer3.jpeg'
import footer4 from '../images/Footer5.jpeg'
import footer5 from '../images/Footer6.jpeg'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import pint from '../images/pinterest.png'
import youtube from '../images/youtube.png'
import './Footer.css'
import apple_card from '../images/apple_pay.png'
import copyright from '../images/copyright.png'



const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-img">
          <img src={footer1} />
          <img src={footer2} />
          <img src={footer3} />
          <img src={footer4} />
          <img src={footer5} />
        </div>
        <div className="sub_footer">
          <div className="shop_menu">
            <p className="footer-h3">SHOP MENU</p>
            <div className="shop_menu_items">
              <div className="shop_menu_first">
                <NavLink exact to="/coats&longJackets" className="footer_category">
                  Coats & Long Jackets
                </NavLink>
                <NavLink exact to="/skirts" className="footer_category">
                  Skirts
                </NavLink>
                <NavLink exact to="/blizers" className="footer_category">
                  Blazers
                </NavLink>
                <NavLink exact to="/accessories" className="footer_category">
                  Accessories
                </NavLink>
              </div>
              <div className="shop_menu_second">
                <NavLink exact to="/dresses" className="footer_category">
                  Dresses
                </NavLink>
                <NavLink exact to="/tops" className="footer_category">
                  Tops
                </NavLink>
                <NavLink exact to="/plants" className="footer_category">
                  Plants
                </NavLink>
              </div>
            </div>
          </div>
          <div className="help_menu">
            <p className="footer-h3">HELP</p>
            <div className="help_menu_items">
              <div className="help_menu_first">
                <NavLink exact to="/contact" className="footer_category">
                  Contact
                </NavLink>
                <NavLink exact to="/myAccount" className="footer_category">
                  My Account
                </NavLink>
                <NavLink exact to="/terms&conditions" className="footer_category">
                  Terms & Conditions
                </NavLink>
              </div>
              <div className="help_menu_second">
                <NavLink exact to="/retailers" className="footer_category">
                  Retailers
                </NavLink>
                <NavLink exact to="/privacyPolicy" className="footer_category">
                  Privacy Policy
                </NavLink>
              </div>
            </div>
          </div>
          <div className="newsletter">
            <p className="footer-h3">NEWSLETTER</p>
            <p>Sign up for 10% off your next order*</p>
            <div className="subscribe_menu">
              <input
                className="email_input"
                placeholder="Enter your email addres"
              ></input>
              <button className="btn_subscribe">SUBSCRIBE</button>
            </div>
          </div>
          <div />
        </div>
        
        <div className="social_icon">
          <img src={facebook} />
          <img src={instagram} />
          <img src={pint} />
          <img className="youtube" src={youtube} />
        </div>
        <div className='social_menu'>
             <div className='copyright'>
            <img src={copyright}/>
            <p>2021 BOUGUESSA</p>
        </div>
        <div className="pay_cards">
          <img src={apple_card} />
          <img src={apple_card} />
          <img src={apple_card} />
          <img src={apple_card} />
          <img src={apple_card} />
        </div>
        </div>
       
      </div>
    );
};

export default Footer;