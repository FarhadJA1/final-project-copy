import { TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/style/Login/LoginInputs.scss'
import {Navigate} from 'react-router-dom'
function LoginInputs(props) {

    return (
        <div className='login-inputs'>
            <div>
                <TextField
                    id="outlined-required-1"
                    label="Email"
                    className='login-input'
                    type='email'
                    onChange={(e) => props.setEmailInput(e.target.value)}
                    value={props.emailInput}
                    autoComplete='off'
                />
            </div>
            <div>
                <TextField
                    id="outlined-required-2"
                    label="Password"
                    className='login-input mt-4'
                    type='password'
                    autoComplete='off'
                    onChange={(e) => props.setPasswordInput(e.target.value)}
                    value={props.capacityInput}
                />
            </div>
            <div className='login-input-links mt-4'>
                <Link onClick={() => props.login()} className='btn btn-outline-primary sign-in-btn' to={'/'}>
                    Sign In
                </Link>                
                <Link className='forgot-password' to={'/forgot-password'}>
                    Forgot Password?
                </Link>

            </div>

        </div>
    )
}

export default LoginInputs
