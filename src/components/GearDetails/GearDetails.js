import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer';

const GearDetails = () => {

    const { gearId } = useParams();

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
        const url = (`http://localhost:5000/gear/${gearId}`);

        fetch(url)
            .then(res => res.json())
            .then(data => setGears(data));
    });
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="text-center col-lg-6 col-sm-12">
                        <img className=" w-75" src={gears.img} alt="" />
                    </div>
                    <div className="text-center pt-5 col-lg-6 col-sm-12">
                        {/* <p>Id: {gears._id}</p> */}
                        <h3>{gears.name}</h3>
                        <p>{gears.description}</p>
                        <p>Price: {gears.price}</p>
                        <p>Available: {gears.quantity} pieces</p>
                        <button className="details-btn border-0 pt-2 mt-3 pb-2 ps-3 pe-3">
                            Delivered
                        </button>
                    </div>
                    <div className='w-50 mx-auto mt-5'>
                        <h3 >Restock Form</h3>
                        <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                            <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                            <textarea className='mb-2' placeholder='Description' {...register("description")} />
                            <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                            <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                            <input value="Restock" type="submit" />
                        </form>
                    </div>

                </div>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default GearDetails;