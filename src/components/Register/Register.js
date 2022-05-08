import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

// import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    });

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/home');
    }

    const handleCreateUser = event => {
        event.preventDefault();


        if (password !== confirmPassword) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or more')
        }
        createUserWithEmailAndPassword(email, password);
        console.log('createUserWithEmailAndPassword');
    }
    return (
        <div >
            <div className='form-container'>
                <div className='form-container-login'>
                    <div>
                        <h2 className='form-title'>Register</h2>
                        <form onSubmit={handleCreateUser}>
                            <div className="input-group">

                                <input onBlur={handleEmailBlur} placeholder="Enter email" type="email" name="email" required />
                            </div>
                            <div className="input-group">

                                <input onBlur={handlePasswordBlur} placeholder="Enter Password" type="password" name="password" required />

                            </div>
                            <div className="input-group">

                                <input onBlur={handleConfirmPassword} placeholder="Confirm Password" type="password" name="confirm-password" required />

                            </div>
                            <p style={{ color: 'red' }}>{error}</p>
                            <input className='form-btn' type="submit" value="Register" />
                        </form>

                        <p>
                            Already Have an account?<Link className='form-link' to="/login">Login</Link>
                        </p>

                        {/* <SocialLogin></SocialLogin> */}



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;