import React from 'react';
import './Footer.css'


import { FaCopyright, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaGithub, FaYahoo } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer'>


            <div>
                <p> Copyright < FaCopyright style={{ fontSize: '12px' }} ></FaCopyright>2022-24 CC | All Rights Reserved </p>
            </div>
            <div>
                <h4 ><i>Camping Cove</i></h4>
            </div>
            <div className='social'>

                < FaInstagram style={{ marginRight: '8px' }} ></FaInstagram>
                < FaFacebook style={{ marginRight: '8px' }} ></FaFacebook>
                <FaTwitter style={{ marginRight: '8px' }} ></FaTwitter>
                <FaYoutube style={{ marginRight: '8px' }} ></FaYoutube>
                <FaGithub style={{ marginRight: '8px' }} ></FaGithub>
                <FaYahoo style={{ marginRight: '8px' }} ></FaYahoo>

            </div>






        </div>
    );
};

export default Footer;