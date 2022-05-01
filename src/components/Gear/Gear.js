import React from 'react';
import './Gear.css'

const Gear = ({ gear }) => {

    const { name, img, description, price } = gear;
    return (
        <div className='gear'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>

            <button className='update-btn ' type="">Update Gear</button>




        </div>
    );
};

export default Gear;