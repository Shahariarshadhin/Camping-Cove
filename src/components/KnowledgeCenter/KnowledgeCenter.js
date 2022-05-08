import React from 'react';
import './KnowledgeCenter.css';
import summerImage from '../../images/summerCamping.jpg';
import tentImage from '../../images/tent.jpg';
import backpackImage from '../../images/sC.jpg'
import { Link } from 'react-router-dom';



const KnowledgeCenter = () => {
    return (
        <div className='container mt-5'>
            <h2 className='mb-3'>Knowledge Center</h2>
            <div className='knowledgeCenter row'>
                <div className='col-lg-4'>
                    <img style={{ height: '171px' }} src={summerImage} alt="" />
                    <Link to='/campingSummer'>Summer Camping</Link>
                </div>
                <div className='col-lg-4'>
                    <img style={{ height: '171px' }} src={tentImage} alt="" />
                    <Link to='/tentGuide'>Tent Buying Guide</Link>
                </div>
                <div className='col-lg-4'>
                    <img style={{ height: '171px' }} src={backpackImage} alt="" />
                    <Link to='/gearBackpack'>Your Perfect Gear Backpacking List</Link>
                </div>
            </div>
            <button className='learn-btn mt-4'>Get Your Learn On</button>
        </div>
    );
};

export default KnowledgeCenter; <h2>Knowledge Center</h2>
