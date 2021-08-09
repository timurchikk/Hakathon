import React from 'react';
import footer1 from '../images/Footer1.jpeg'
import footer2 from '../images/Footer2.jpeg'
import footer3 from '../images/Footer3.jpeg'
import footer4 from '../images/Footer5.jpeg'
import footer5 from '../images/Footer6.jpeg'


const Footer = () => {
    return (
        <div>
            <div>
                <img src={footer1}/>
                <img src={footer2}/>
                <img src={footer3}/>
                <img src={footer4}/>
                <img src={footer5}/>
            </div>

            <NavLink></NavLink>
            <NavLink></NavLink>
            <NavLink></NavLink>
            <NavLink></NavLink>
            <NavLink></NavLink>
            <NavLink></NavLink>
            <NavLink></NavLink>
            <NavLink></NavLink>
        </div>
    );
};

export default Footer;