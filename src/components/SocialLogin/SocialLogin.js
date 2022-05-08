import React from 'react';
import './SocialLogin.css'
import google from '../../images/google-logo.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

    if (error) {
        errorElement =
            <div>
                <p>Error: {error.message}</p>
            </div>

    }

    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className='sec-divider'>
                <div className='divider'></div>
                <p>or</p>
                <div className='divider'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='google-btn'>
                    <img src={google} alt="" />
                    <span className='btn-title'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;