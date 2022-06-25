import React from 'react'
import { TextField } from '@mui/material'
import '../../assets/style/Login/ForgotPassword.scss'
function ForgotPassword() {
    return (
        <div className='forgot-password-area'>
            <img className='forgot-image mb-3' src={require('../../assets/img/pngwing.com.png')} alt="" />
            <TextField autoComplete='off' className='forgot-email-input' type='email' id="outlined-basic" label="Email" variant="outlined" />
            <button type="button" className=" mt-4 forgot-button" data-bs-dismiss="modal">Send</button>
        </div>
    )
}

export default ForgotPassword
