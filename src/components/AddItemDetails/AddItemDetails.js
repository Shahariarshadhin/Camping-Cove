import React from 'react';

import { useNavigate } from 'react-router-dom';

const AddItemDetails = ({ gear }) => {
    const { _id, name, img, description, price } = gear;
    const navigate = useNavigate();

    const navigateGear = id => {
        navigate(`/gear/${id}`)
    }
    return (
        <div className='gear'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>


            <button onClick={() => navigateGear(_id)} className='update-btn ' type="">Add Your Item</button>




        </div>
    );
};

export default AddItemDetails;