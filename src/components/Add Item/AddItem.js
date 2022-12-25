/* import React, { useEffect, useState } from 'react';
import AddItemDetails from '../AddItemDetails/AddItemDetails';

const AddItem = () => {
    const [gears, setGears] = useState([]);

    useEffect(() => {
        fetch('https://camping-cove.onrender.com/gear')
            .then(res => res.json())
            .then(data => setGears(data));
    }, []);
    return (
        <div>
            <div className="gear-box">
                {
                    gears.map(gear => <AddItemDetails

                        key={gear._id}
                        gear={gear}


                    ></AddItemDetails>)
                }
            </div>
        </div>
    );
};

export default AddItem; */

import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://camping-cove.onrender.com/gear`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })

        console.log(data)
    };


    return (
        <div>

            <div className='w-50 mx-auto mt-5'>
                <h3 >Add New Item</h3>
                <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-2' placeholder='Email ' type="email" {...register("email")} />
                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2' placeholder='Supplier Name ' type="text" {...register("suppllier")} />
                    <input className='mb-2' placeholder='Available' type="number" {...register("available")} />
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <input value="Upload Data" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddItem;