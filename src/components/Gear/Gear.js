import React from 'react';
import './Gear.css';
import { useNavigate } from 'react-router-dom';

const Gear = ({ gear }) => {

    const { _id, name, img, description, price, supplier_name, available } = gear;
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
            <p>Supplier :{supplier_name}</p>
            <p>Available :{available}</p>


            <button onClick={() => navigateGear(_id)} className='update-btn ' type="">Update Gear</button>




        </div>
    );
};

export default Gear;