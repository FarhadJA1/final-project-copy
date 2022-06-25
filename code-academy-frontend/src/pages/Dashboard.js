
import axios from 'axios';
import React, { useEffect,useState } from 'react'
import '../assets/style/Dashboard.scss'
import From from '../components/Dashboard/From'
import GroupChart from '../components/Dashboard/GroupChart';
import StudentChart from '../components/Dashboard/StudentChart';
import TeacherChart from '../components/Dashboard/TeacherChart';
import Welcome from '../components/Dashboard/Welcome'
function Dashboard() {
  
  return (
    <div className='dashboard'>
      <Welcome />
      <From />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">            
            <GroupChart />
          </div>
          <div className="col-lg-6">
            <StudentChart />
          </div>
        </div>

        <div className="teacher-chart-area">
          
          <TeacherChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
