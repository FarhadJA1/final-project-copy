import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, Title } from 'chart.js/auto'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
function TeacherChart() {
    const { t } = useTranslation();
    const UserData = [
        {
            id: 1,
            year: 2016,
            userGain: 10000,
            userLost: 871
        },
        {
            id: 2,
            year: 2017,
            userGain: 12313,
            userLost: 122
        },
        {
            id: 3,
            year: 2018,
            userGain: 43244,
            userLost: 342
        },
        {
            id: 4,
            year: 2019,
            userGain: 54233,
            userLost: 234
        },
        {
            id: 5,
            year: 2020,
            userGain: 54632,
            userLost: 453
        }
    ]

    const [chartData, setChartData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: t("teachers"),
            data: UserData.map((data) => data.userGain),
            backgroundColor: ["#6b5b95", "#feb236", "#b5e7a0", "#f7786b", "#ffef96"],           

        }],

    });
    return (
        <div>

            <div style={{ width: 600 }} className='container teacher-chart mt-5 ms-1'>
                <Pie  data={chartData} />
            </div>
        </div>
    )
}

export default TeacherChart
