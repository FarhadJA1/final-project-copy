import React from 'react'
import { useTranslation } from 'react-i18next';
function EmployeeTable(props) {
  let count =1;
  const { t } = useTranslation();
  return (
    <div>
      <table id='employee-table' className="table table-hover employee-table">
        <thead>
          <tr>
            <th className='table-header' scope="col">#</th>
            <th className='table-header' scope="col">{t("fullname")}</th>
            <th className='employee-email'>Email</th>
            <th scope="col">{t("phone")}</th>            
          </tr>
        </thead>
        <tbody>
          {props.employees?.map(employee => (
            <tr key={employee?.id}>
              <th className='table-header' scope="row">{count++}</th>
              <td align='center'>{employee?.fullname}</td>
              <td >{employee?.email}</td>
              <td >{employee?.phoneNumber}</td> 
            </tr>
          ))}


        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable
