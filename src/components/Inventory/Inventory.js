import React, { useEffect, useState } from 'react';
import Gear from '../Gear/Gear';

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

            {
                gears.map(gear => <Gear

                    key={gear._id}
                    gear={gear}


                ></Gear>)
            }

        </div>
    );
};

export default Inventory;