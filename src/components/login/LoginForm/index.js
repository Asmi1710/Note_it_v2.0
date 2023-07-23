import React, { useState } from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { FormGroup, Form, Button } from 'reactstrap';
import './index.css';
import IconFunc from '../../core/Icons/IconFunc';

const LoginForm = (props)=>{

    const [showPassword, setShowPassword ] = useState(false);

    const { handleSignup } = props;

    const inputValidations = Yup.object().shape({
        email : Yup.string().required(" Please enter the valid email id"),
        password : Yup.string().required(" Please enter the correct password")
    })

    const handleGoogleLogin = ()=>{

    }

    return (
        <div className='form-container container'>
            <div className='welcome-text'>Welcome Back !</div>
            <div className='tagline'>Unlock Your Potential: Amplify, Organize, and Conquer!</div>
                <Formik 
                    enableReinitialize
                    initialValues = {{
                        email:"",
                        password:""
                    }}

                    validationSchema = {inputValidations}

                    onSubmit = {(values, actions)=>{
                        console.log("Values", values);
                        setLogin(true);
                    }}
                    >
                    {
                        (
                            {
                                handleBlur,
                                handleChange,
                                handleSubmit,
                                values,
                                errors,
                                touched
                            }
                        )=>(
                            <Form onSubmit = {handleSubmit} className='login-form'>
                                <FormGroup className='form-group'>
                                    <label htmlFor='email' >{"Email"}</label>
                                    <input 
                                        type = 'email'
                                        className='input-field'
                                        name = 'email'
                                        id = 'email'
                                        value={values.email}
                                        onChange={handleChange('email')}
                                        touched={touched.email}
                                        errors={errors.email}
                                        onBlur={handleBlur('email')}
                                    />
                                </FormGroup>
                                <div>
                                    {errors.email && touched.email?
                                        (<div className='error-msg'>
                                            {errors.email}
                                        </div>)
                                    :null }
                                </div>
                                <FormGroup className='form-group'>
                                    <label htmlFor='password' >{"Password"}</label>
                                    <div className='flex-style'>
                                        <input 
                                            type = {showPassword?'text':'password'}
                                            className='input-field'
                                            name = 'password'
                                            id = 'password'
                                            value={values.password}
                                            onChange={handleChange('password')}
                                            touched={touched.password}
                                            errors={errors.password}
                                            onBlur={handleBlur('password')}
                                        />
                                        <div onClick={()=>{
                                            setShowPassword(!showPassword);
                                        }}>
                                            <IconFunc name={showPassword?"passwordShow":"passwordHide"} />
                                        </div>
                                    </div>
                                </FormGroup>
                                <div>
                                    {errors.password && touched.password?
                                    <div className='error-msg'>{errors.password}</div>:null}
                                </div>
                                <div className='forgot-password btn-cursor'>Forgot Password ?</div>
                                <FormGroup className='button-group'>
                                    <Button className='submit-btn' type='submit'>Login</Button>
                                    <div className='sign-up-text'>Don't have an account ? 
                                        <span className='sign-up-link btn-cursor' onClick={handleSignup}> Sign up</span>
                                    </div>
                                </FormGroup>
                            </Form>
                        )
                    }
                </Formik>
                <div className='flex-style login-or-container'>
                    <div className='straight-line'></div>
                    <div className='or-text'>or</div>
                    <div className='straight-line'></div>
                </div>
                <div className='login-form google-btn-container'>
                    <Button className='flex-style google-login-btn' onClick={handleGoogleLogin}>
                        <IconFunc name="googleIcon" classname='col-5 google-icon' />
                        <div className='col-7 google-text'>Sign in with Google</div>
                    </Button>
                </div>
        </div>
    )
}

export default LoginForm