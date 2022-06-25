import React from 'react'
import { useTranslation } from 'react-i18next';
import '../../assets/style/Navigation/Profile.scss'
import axios from 'axios'
import { useState, useEffect } from 'react';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { Link } from 'react-router-dom';
function Profile() {
    const { t } = useTranslation();
    const url = "https://localhost:44380"
    let token = localStorage.getItem('token');

    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };

    const [user, setUser] = useState();
    useEffect(() => {
        if (token != null) {

            let email = parseJwt(token).sub[1]
            axios.get(`${url}/api/Account/GetUserByEmail/${email}`)
                .then((res) => {
                    setUser(res.data)
                })
        }
    }, [])

    function Logout(e) {
        e.preventDefault();
        localStorage.removeItem('token');
        window.location.reload();
    }

    let userdet = parseJwt(token)["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];


    return (
        <div className='profile'>
            <button type="button" className="btn btn-outline-light " data-bs-toggle="dropdown" aria-expanded="false">
                {t(`hi`)} {user?.fullName.substring(0,6)}
                <img className='profile-image-btn' src={require('../../assets/img/avatar.png')} alt="avatar" />
            </button>
            <ul className="dropdown-menu">
                <li>
                    <img className='profile-image-list' src={require('../../assets/img/avatar.png')} alt="avatar" />
                </li>
                <li>
                    {user?.fullName}
                </li>
                <li>
                    {user?.email}

                </li>
                <li className='email-address'>
                    {userdet}
                </li>

                <li>
                    <Link className='btn btn-outline-warning edit-profile-button' to={'/edit-profile'}>
                        <AutoAwesomeOutlinedIcon className='edit-profile-button-icon'/>
                        {t(`profile`)}
                    </Link>
                </li>

                <li className='logout'>
                    <button onClick={(e) => Logout(e)} type="button" className="btn btn-outline-danger logout-button"><LogoutOutlinedIcon className='logout-button-icon' /> {t(`logout`)}</button>
                </li>

            </ul>
        </div>
    )
}

export default Profile
