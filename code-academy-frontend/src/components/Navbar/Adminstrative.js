import React from 'react'
import { Link } from 'react-router-dom'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import DirectionsOutlinedIcon from '@mui/icons-material/DirectionsOutlined';
import HouseSidingOutlinedIcon from '@mui/icons-material/HouseSidingOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { useTranslation } from 'react-i18next';
function Adminstrative() {
    const { t } = useTranslation();
    return (
        <div className='container nav-operations'>
            <div className="row mt-3">
                <h6 className='nav-title'>{t(`adminstrative`)}</h6>
                <Link className='nav-link' to={'/paytype'}>
                    <PaymentsOutlinedIcon className='nav-icon' />
                    <span>{t(`payment options`)}</span>
                </Link>
                <Link className='nav-link' to={'/education'}>
                    <SchoolOutlinedIcon className='nav-icon' />
                    <span>{t(`education type`)}</span>
                </Link>
                <Link className='nav-link' to={'/resource'}>
                    <DirectionsOutlinedIcon className='nav-icon' />
                    <span>{t(`resources`)}</span>
                </Link>
                <Link className='nav-link' to={'/classroom'}>
                    <HouseSidingOutlinedIcon className='nav-icon' />
                    <span>{t(`classrooms`)}</span>
                </Link>
                <Link className='nav-link' to={'/term'}>
                    <WatchLaterOutlinedIcon className='nav-icon' />
                    <span>{t(`hours`)}</span>
                </Link>
                <Link className='nav-link' to={'/employees'}>
                    <BadgeOutlinedIcon className='nav-icon' />
                    <span>{t(`employees`)}</span>
                </Link>
            </div>
        </div>
    )
}

export default Adminstrative
