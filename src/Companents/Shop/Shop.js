import React from 'react';
import './Shop.css'

const Shop = () => {
    return (
        <div className='shop'>
        <p>CATEGORIES</p>
            <ul className='categoria'>
                <li className='li-categoria'>All</li>
                <li className='li-categoria'>Accessories</li>
                <li className='li-categoria'>Blazers</li>
                <li className='li-categoria'>Coats & Long Jackets</li>
                <li className='li-categoria'>Denim</li>
                <li className='li-categoria'>Dresses</li>
                <li className='li-categoria'>Pants</li>
                <li className='li-categoria'>Skirts</li>
                <li className='li-categoria'>Tops</li>

            </ul>
        </div>
    );
};

export default Shop;