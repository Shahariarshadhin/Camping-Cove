import React from 'react';
import banner from '../../images/banner.jpg'
import Inventory from '../Inventory/Inventory';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <img src={banner} alt="" />

            <div>
                <Inventory></Inventory>
            </div>
        </div>


    );
};

export default Home;