import React, { useState } from 'react';

import './index.css';
import InfoPanelDesktop from '../../components/login/InfoPanelDesktop';
import LoginForm from '../../components/login/LoginForm';
import SignUpForm from '../../components/login/SignUpForm';

const Login = (props)=>{

    const { setLogin }= props;
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
                <InfoPanelDesktop />
                <div className='col-lg-6 form-section'>
                {
                    form==='login'?
                    <LoginForm handleSignup={handleSignup} setLogin={setLogin}/>
                    :
                    <SignUpForm handleLogin={handleLogin} />
                }
                </div>
            </div>
        </div>
    )
}

export default Login