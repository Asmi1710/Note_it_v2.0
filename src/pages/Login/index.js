import React, { useState } from 'react';

import LoginForm from '../../components/login/LoginForm';
import SignUpForm from '../../components/login/SignUpForm';
import './index.css';

const Login = (props)=>{

    const [form, setForm]= useState('login');

    const handleSignup=()=>{
        setForm('signup');
    }

    const handleLogin=()=>{
        setForm('login')
    }

    return (
        <div className='login-container'>
            <div className='row'>
                <div className='col-lg-6 info-section'>
                    <div>Note-It</div>
                    <div>Master your notes, elevate your productivity</div>
                </div>
                <div className='col-lg-6 form-section'>
                {
                    form==='login'?
                    <LoginForm handleSignup={handleSignup} />
                    :
                    <SignUpForm handleLogin={handleLogin} />
                }
                </div>
            </div>
        </div>
    )
}

export default Login