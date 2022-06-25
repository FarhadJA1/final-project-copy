import React from 'react'
import FinanceButton from '../components/Finance/FinanceButton'
import FinanceTable from '../components/Finance/FinanceTable'
import PrintButton from '../components/Finance/PrintButton'
import { useState, useEffect } from 'react';
import '../assets/style/Finance/Finance.scss'
import axios from 'axios';

function Finance() {
  const url = "https://localhost:44380"
  const [createDate, setCreateDate] = useState();
  const [reports, setReports] = useState([]);

  async function GetReports() {
    const response = await axios.get(`${url}/api/Finance/GetAll`)
      .catch(error => console.log(error));
    setReports(response.data);
  }
  useEffect(() => {
    GetReports();
  }, []);

  async function CreateReport() {
    
    await axios.post(`${url}/api/Finance/CreateReport`, {
      createDate: createDate,
    })
      .then(res => { 
        GetReports();    
        setCreateDate("");     
      })
      .catch(error => console.log(error));
  }
  return (
    <div className='container finance'>
      <div className='finance-buttons my-3'>
        <div className='me-4'>
          <PrintButton />
        </div>
        <div>
          <FinanceButton createDate={createDate} setCreateDate={setCreateDate}
            createReport={CreateReport}
          />
        </div>
      </div>

      <FinanceTable reports={reports}/>
    </div>
  )
}

export default Finance
