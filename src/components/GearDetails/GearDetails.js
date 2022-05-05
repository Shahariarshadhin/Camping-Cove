import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../Footer/Footer';

const GearDetails = () => {

    const { gearId } = useParams();

    const [gears, setGears] = useState([]);


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


                </div>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default GearDetails;