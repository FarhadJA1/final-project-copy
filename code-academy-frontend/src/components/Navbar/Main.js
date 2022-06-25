import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/style/Navigation/Main.scss'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import { useTranslation } from 'react-i18next';
function Main() {
    const { t } = useTranslation();
    return (
        <div className='container nav-main'>
            <div className="row mt-3">
                <h6 className='nav-title'>{t(`main`)}</h6>
                <Link className='nav-link' to={'/reports'}>
                    <BarChartOutlinedIcon className='nav-icon'/>
                    <span>{t(`analitics`)}</span>
                </Link>
                <Link className='nav-link' to={'/finance'}>
                <AutoGraphOutlinedIcon className='nav-icon'/>
                    <span>{t(`financial`)}</span>
                </Link>
            </div>

        </div>
    )
}

export default Main
