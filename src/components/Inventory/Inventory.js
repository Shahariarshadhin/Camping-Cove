import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Gear from '../Gear/Gear';
import './Inventory.css'

const Inventory = () => {

    const [gears, setGears] = useState([]);
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

            <Footer></Footer>

        </div>
    );
};

export default Inventory;