import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/style/Navigation/Logo.scss'
function Logo() {
    return (
        <div className='logo'>
            <Link to={'/'}>
                <img src={require('../../assets/img/logo-footer.png')} alt="logo" />
            </Link>
        </div>
    )
}

export default Logo
