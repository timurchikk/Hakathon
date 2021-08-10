import React from 'react';
import './Header.css'
import logo from '../images/logo-b.png'
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header>
                <div className='header'>
                    <div className='hd-text'>
                        <NavLink exact to='/shop/all'><p>SHOP</p></NavLink>
                        <NavLink exact to='/COLLECTIONS'><p>COLLECTIONS</p></NavLink>
                        <NavLink exact to='/ABOUT'><p>ABOUT</p></NavLink>
                        <NavLink exact to='/JOURNAL'><p>JOURNAL</p></NavLink>
                    </div>

                    <div className='logo-conteiner'>
                    <NavLink exact to='/'><img className='logo' src={logo} /></NavLink>
</div>
        <div className='center'>
                    <div className='icons'>

                        <svg className="ser" role="presentation" viewBox="0 0 512 512">
                            <path d="M378.667,21.333c-56.792,0-103.698,52.75-122.667,77.646c-18.969-24.896-65.875-77.646-122.667-77.646
               C59.813,21.333,0,88.927,0,172c0,45.323,17.99,87.562,49.479,116.469c0.458,0.792,1.021,1.521,1.677,2.177l197.313,196.906
               c2.083,2.073,4.802,3.115,7.531,3.115s5.458-1.042,7.542-3.125L467.417,283.74l2.104-2.042c1.667-1.573,3.313-3.167,5.156-5.208
               c0.771-0.76,1.406-1.615,1.896-2.542C499.438,245.948,512,209.833,512,172C512,88.927,452.188,21.333,378.667,21.333z
               M458.823,261.948c-0.292,0.344-0.563,0.708-0.802,1.083c-1,1.146-2.094,2.156-3.177,3.188L255.99,464.927L68.667,277.979
               c-0.604-1.188-1.448-2.271-2.479-3.177C37.677,249.906,21.333,212.437,21.333,172c0-71.313,50.24-129.333,112-129.333
               c61.063,0,113.177,79.646,113.698,80.448c3.938,6.083,14,6.083,17.938,0c0.521-0.802,52.635-80.448,113.698-80.448
               c61.76,0,112,58.021,112,129.333C490.667,205.604,479.354,237.552,458.823,261.948z"></path>
                        </svg>

                        <svg className="account" role="presentation" viewBox="0 0 20 20">
                            <g transform="translate(1 1)" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                                <path d="M0 18c0-4.5188182 3.663-8.18181818 8.18181818-8.18181818h1.63636364C14.337 9.81818182 18 13.4811818 18 18"></path>
                                <circle cx="9" cy="4.90909091" r="4.90909091"></circle>
                            </g>
                        </svg>

                        <svg className="search" role="presentation" viewBox="0 0 18 17">
                            <g transform="translate(1 1)" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="square">
                                <path d="M16 16l-5.0752-5.0752"></path>
                                <circle cx="6.4" cy="6.4" r="6.4"></circle>
                            </g>
                        </svg>

                        <svg className="cart" role="presentation" viewBox="0 0 17 20">
                            <path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="currentColor"></path>
                        </svg>

                    </div>
                    </div>


                </div>
        </header>
    );
};

export default Header;