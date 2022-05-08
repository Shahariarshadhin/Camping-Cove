
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
// import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        // loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {

        await sendPasswordResetEmail(email);
        toast('Sent email');

    }
    return (
        <div className='form-container'>
            <div className='form-container-login'>

                <div>
                    <h2 className='form-title'>Login</h2>
                    <form onSubmit={handleUserSignIn}>
                        <div className="input-group">

                            <input onBlur={handleEmailBlur} placeholder="Enter email" type="email" name="email" required />
                        </div>
                        <div className="input-group">

                            <input onBlur={handlePasswordBlur} placeholder="Enter Password" type="password" name="password" required />

                        </div>
                        <p>{error?.message}</p>
                        <input className='form-btn' type="submit" value="Login" />

                    </form>

                    <p>
                        New To Camping Cove?<Link className='form-link' to="/register">Create an account</Link>
                    </p>

                    <p>
                        Forgot Password?<Link className='form-link' to="/login" onClick={resetPassword}>Reset Password</Link>
                    </p>

                    {/* <SocialLogin></SocialLogin> */}
                    <ToastContainer />


                </div>

            </div>
        </div>
    );
};

export default Login;

