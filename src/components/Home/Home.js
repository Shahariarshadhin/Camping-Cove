import React from 'react';
import banner from '../../images/banner.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <img src={banner} alt="" />
        </div>
    );
};

export default Home;