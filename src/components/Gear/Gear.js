import React, { useState } from 'react';
import './Gear.css';
import { useNavigate } from 'react-router-dom';

const Gear = ({ gear }) => {

    const [gears, setGears] = useState([]);
    const { _id, name, img, description, price, supplier_name, available } = gear;
    const navigate = useNavigate();

    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            const url = (`http://localhost:5000/singlegear/=${id}`);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = gears.filter(gear => gear._id !== id);
                    setGears(remaining);
                })
        }

    }

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

            <button onClick={() => handleDelete(gear._id)} className='update-btn mx-2' type="">Delete</button>




        </div>
    );
};

export default Gear;