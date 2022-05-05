import React, { useEffect, useState } from 'react';
import AddItemDetails from '../AddItemDetails/AddItemDetails';

const AddItem = () => {
    const [gears, setGears] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/gear')
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

export default AddItem;