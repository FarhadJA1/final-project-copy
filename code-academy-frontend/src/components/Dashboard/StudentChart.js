import React from 'react'
import {Line} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
function StudentChart() {
    const UserData = [
        {
            id:1,
            year:2016,
            userGain:10000,
            userLost:871
        },
        {
            id:2,
            year:2017,
            userGain:12313,
            userLost:122
        },
        {
            id:3,
            year:2018,
            userGain:43244,
            userLost:342
        },
        {
            id:4,
            year:2019,
            userGain:54233,
            userLost:234
        },
        {
            id:5,
            year:2020,
            userGain:54632,
            userLost:453
        }
    ]
    const { t } = useTranslation();
    const [chartData,setChartData] = useState({
        labels:UserData.map((data)=>data.year),
        datasets:[{
            label:t("students"),
            data:UserData.map((data)=>data.userGain),
            backgroundColor:["#feb236"],           
            
        }]
    });
    
  return (
    <div>
       <div className='container group-chart'>
            <Line data={chartData}/>
        </div>
    </div>
  )
}

export default StudentChart
