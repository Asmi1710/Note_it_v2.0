import React from 'react';

import LoginForm from '../../components/login/LoginForm';
import './index.css';

const Login = (props)=>{
    return (
        <div className='login-container'>
            <div className='row'>
                <div className='col-lg-6 info-section'>
                    <div>Note-It</div>
                    <div>Master your notes, elevate your productivity</div>
                </div>
                <div className='col-lg-6 form-section'>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login