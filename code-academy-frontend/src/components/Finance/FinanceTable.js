import React from 'react'
import { useTranslation } from 'react-i18next';
function FinanceTable(props) {
  let count=1;
  const { t } = useTranslation();
  return (
    <div>
      <table id='finance-table' className="table table-hover finance-table">
        <thead>
          <tr>
            <th className='table-header' scope="col">#</th>
            <th className='table-header' scope="col">{t("report date")}</th>
            <th className='table-header' scope="col">{t("income")}</th>
            <th className='table-header' scope="col">{t("expence")}</th>
            <th className='table-header' scope="col">{t("total")}</th>
          </tr>
        </thead>
        <tbody>
          {props.reports?.map(report => (
            <tr key={report?.id}>
              <th className='table-header' scope="row">{count++}</th>
              <td align='center'>{report?.createDate.substring(0,10).split("-").reverse().join("-")}</td>
              <td align='center'>{report?.income}</td>
              <td align='center'>{report?.expence}</td>
              <td align='center'>{report?.total}</td>
            </tr>
          ))}


        </tbody>
      </table>
    </div>
  )
}

export default FinanceTable
