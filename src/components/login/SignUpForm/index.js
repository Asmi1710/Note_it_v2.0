import React, {useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './index.css';
import { Button, Form, FormGroup } from 'reactstrap';
import IconFunc from '../../core/Icons/IconFunc';


const SignUpForm = (props)=>{

    const [showPassword, setShowPassword ] = useState(false);

    const { handleLogin } = props;

    const inputValidations = Yup.object().shape({
        firstName: Yup.string().required('Please enter a valid first name.'),
        lastName: Yup.string().required('Please enter a valid last name.'),
        email: Yup.string().required('Please enter a valid email id. '),
        password: Yup.string().required('Please enter a correct password')
    })

    const handleGoogleSignup = ()=>{

    }

    return (
        <div className='container form-container'>
            <div className='welcome-text'>Create your account</div>
            <Formik
                enableReinitialize
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                }}

                validationSchema = {inputValidations}
                onSubmit={(values, actions)=>{

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
                        <Form onSubmit={handleSubmit} className = 'signup-form'>
                            <div className='row'>
                                <div className='col-lg-6 col-sm-12 col-md-12'>
                                    <FormGroup className='form-group'>
                                        <label htmlFor='firstName'>First Name</label>
                                        <input 
                                            type = 'text'
                                            className ='input-field'
                                            id ='firstName'
                                            name ='firstName'
                                            value ={values.firstName}
                                            onChange ={handleChange('firstName')}
                                            onBlur ={handleBlur('firstName')}
                                            touched ={touched.firstName}
                                            errors ={errors.firstName}
                                        />
                                    </FormGroup>
                                    {   errors.firstName && touched.firstName?
                                        <div className='error-msg'>{errors.firstName}</div>
                                        :null}
                                </div>
                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <FormGroup className='form-group'>
                                        <label htmlFor='lastName'>Last Name</label>
                                        <input 
                                            type ='text'
                                            className ='input-field'
                                            name ='lastName'
                                            id ='lastName'
                                            value ={values.lastName}
                                            onChange ={handleChange('lastName')}
                                            onBlur ={handleBlur('lastName')}
                                            touched ={touched.lastName}
                                            errors ={errors.lastName}
                                        />
                                    </FormGroup>
                                    {   errors.lastName && touched.lastName ?
                                        <div className='error-msg'>{errors.lastName}</div>
                                        :null}
                                </div>
                            </div>
                            <FormGroup className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input 
                                    type ='email'
                                    className ='input-field'
                                    id ='email'
                                    name ='email'
                                    value ={values.email}
                                    onChange ={handleChange('email')}
                                    onBlur ={handleBlur('email')}
                                    touched ={touched.email}
                                    errors ={errors.email}
                                />
                            </FormGroup>
                            {   errors.email && touched.email?
                                <div className='error-msg'>{errors.email}</div>
                                :null}
                            <FormGroup className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <div className='flex-style'>
                                    <input 
                                        type ={showPassword?'text':'password'}
                                        className ='input-field'
                                        id ='showPassword'
                                        name ='showPassword'
                                        value ={values.password}
                                        onChange ={handleChange('password')}
                                        onBlur ={handleBlur('password')}
                                        touched ={touched.password}
                                        errors ={errors.password}
                                    />
                                    <div onClick={()=>{
                                        setShowPassword(!showPassword);
                                    }}>
                                        <IconFunc name={showPassword?"passwordShow":"passwordHide"} />
                                    </div>
                                </div>
                            </FormGroup>
                            {
                                errors.password && touched.password ?
                                <div className='error-msg'>{errors.password}</div>
                                :null
                            }
                            <div className='password-info'>Password must be atleast 8 characters long with 1 capital letter, 1 small letter and 1 number</div>
                            <FormGroup>
                                <Button type='submit' className='submit-btn' >Sign up</Button>
                                <div className='sign-up-text'>Already have an account ? 
                                        <span className='sign-up-link btn-cursor' onClick={handleLogin}> Sign in</span>
                                </div>
                            </FormGroup>
                        </Form>
                    )
                }
            </Formik>
            <div className='flex-style signup-or-container'>
                <div className='straight-line'></div>
                <div className='or-text'>or</div>
                <div className='straight-line'></div>
            </div>
            <div className='login-form signup-google-btn-container'>
                <Button className='flex-style google-login-btn' onClick={handleGoogleSignup}>
                    <IconFunc name="googleIcon" classname='col-5 google-icon' />
                    <div className='col-7 google-text'>Sign up with Google</div>
                </Button>
            </div>

        </div>
    )
}   

export default SignUpForm