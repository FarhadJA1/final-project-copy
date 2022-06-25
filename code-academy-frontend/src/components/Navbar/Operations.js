import React from 'react'
import { Link } from 'react-router-dom'
import GroupsIcon from '@mui/icons-material/Groups';
import '../../assets/style/Navigation/Operations.scss'
import { useTranslation } from 'react-i18next';
function Operations() {
  const { t } = useTranslation();
  return (
    <div className='container nav-operations'>
      <div className="row mt-3">
        <h6 className='nav-title'>{t(`operations nav`)}</h6>
        <Link className='nav-link' to={'/groups'}>
          <GroupsIcon className='nav-icon' />
          <span>{t(`groups`)}</span>
        </Link>        
        <Link className='nav-link' to={'/teachers'}>
          <i className="fas fa-chalkboard-teacher nav-icon"></i>
          <span>{t(`teacher`)}</span>
        </Link>    
        <Link className='nav-link' to={'/students'}>
          <i className="fas fa-user-graduate student-icon nav-icon"></i>
          <span>{t(`students`)}</span>
        </Link>
      </div>
    </div>
  )
}

export default Operations
