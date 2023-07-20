import React, { useState } from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { FormGroup, Form } from 'reactstrap';
import './index.css';

const LoginForm = (props)=>{

    const [showPassword, setShowPassword ] = useState(false);

    const inputValidations = Yup.object().shape({
        email : Yup.string().required(" Please enter the valid email id"),
        password : Yup.string().required(" Please enter the correct password")
    })

    

    return (
        <div className='form-container container'>
            <div>Welcome Back !</div>
            <div>Unleash Your Potential: Empower, Organize, and Conquer!</div>
                <Formik 
                    enableReinitialize
                    initialValues = {{
                        email:"",
                        password:""
                    }}

                    validationSchema ={inputValidations}

                    onSubmit = {(values, actions)=>{
                        console.log("Values", values);
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
                            <Form onSubmit = {handleSubmit}>
                                <FormGroup>
                                    <label htmlFor='email' >Email</label>
                                    <div>
                                        <input 
                                            type = 'email'
                                            name = 'email'
                                            id = 'email'
                                            placeholder = 'Email'
                                        />
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor='password' >Password</label>
                                    <div>
                                        <input 
                                            type = {showPassword?'text':'password'}
                                            name = 'password'
                                            id = 'password'
                                            placeholder = 'Password'
                                        />
                                        <div></div>
                                    </div>
                                </FormGroup>
                            </Form>
                        )
                    }
                </Formik>
        </div>
    )
}

export default LoginForm