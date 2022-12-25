import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
// import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItems.css'


const MyItems = () => {

    const [user] = useAuthState(auth);
    // console.log(user);
    const [gears, setGears] = useState([]);

    useEffect(() => {
        const email = user?.email;
        console.log(email)
        const url = (`https://camping-cove.onrender.com/singlegear?email=${email}`);
        fetch(url, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => setGears(data));
    }, [user]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            const url = (`https://camping-cove.onrender.com/singlegear/=${id}`);
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
    return (
        <div>
            <h2>Your Item : {gears.length}</h2>
            {
                gears.map(gear =>




                    <div className="">

                        <h1 className="text-center pt-4 mt-4 text-primary">{gears.title}</h1>
                        <Card className="mx-auto m-5 card" style={{ width: "18rem" }}>
                            <Card.Img
                                className="border rounded mx-auto mt-2 p-1 card-img"
                                variant="top"
                                src={gear.img}
                            />
                            <Card.Body>

                                <Card.Title className="title">{gear.name}</Card.Title>
                                <Card.Text className="text">{gear.description}</Card.Text>
                                <Card.Text className="text">Price: {gear.price}</Card.Text>
                                <Card.Text className="text">available: {gear.availabe}</Card.Text>
                                <Card.Text className="text">
                                    Supplier: {gear.supplier_name}
                                </Card.Text>
                                <Card.Text className="text">Supplyer Id.: {gear._id}</Card.Text>

                                <button onClick={() => handleDelete(gear._id)} className='update-btn ' type="">Delete</button>
                            </Card.Body>
                        </Card>

                    </div>




                    // <div className='single-gear '>
                    //     <div>
                    //         <img className='w-100' src={gear.img} alt="" />
                    //         <h2>{gear.name}</h2>
                    //         <p>Price: {gear.price}</p>
                    //         <p><small>{gear.description}</small></p>
                    //         <p>Supplier :{gear.supplier_name}</p>
                    //         <p>Available :{gear.available}</p>


                    //         <button className='update-btn ' type="">Delete</button>

                    //     </div>



                    // </div>

                )
            }
        </div>
    );
};

export default MyItems;