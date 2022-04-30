import React from 'react';

const Gear = ({ gear }) => {

    const { name, img, description, price } = gear;
    return (
        <div className='gear'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>

        </div>
    );
};

export default Gear;