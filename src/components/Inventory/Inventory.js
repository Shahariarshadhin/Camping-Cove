import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Gear from '../Gear/Gear';
import './Inventory.css';
import { useForm } from "react-hook-form";

const Inventory = () => {

    const [gears, setGears] = useState([]);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/gear`;
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


    useEffect(() => {
        fetch('http://localhost:5000/gear')
            .then(res => res.json())
            .then(data => setGears(data));
    }, []);
    return (
        <div>

            <h1>inventory</h1>

            <div className="gear-box">
                {
                    gears.map(gear => <Gear

                        key={gear._id}
                        gear={gear}


                    ></Gear>)
                }
            </div>

            <div className='w-50 mx-auto mt-5'>
                <h3 >Add New Item</h3>
                <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <input value="Add New Item" type="submit" />
                </form>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Inventory;