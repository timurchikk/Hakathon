import React from 'react';
import './Collections.css'
import item1 from '../images/collection1.jpeg'
import item2 from '../images/collection2.jpeg'


const Collections = () => {
    return (
        <>
            <div className='collections'>
            <h3 className='collecton_h3'>COLLECTIONS</h3>
                <div className='wrap_collections'>
                    <div className='collections_item'>
                        <img src={item1}/>
                        <p className='collection_title'>COLLECTION</p>
                        <p>THE SIGNATURE LINE</p>
                    </div>
                    <div className='collections_item'>
                        <img src={item2}/>
                        <p className='collection_title'>COLLECTION</p>
                        <p>SPRING/SUMMER 2021</p>
                    </div>
                    <div className='collections_item'>
                        <img src={item1}/>
                        <p className='collection_title'>COLLECTION</p>
                        <p>FALL/WINTER2020</p>
                    </div>

                    
                </div>

            </div>
        </>
    );
};


export default Collections;