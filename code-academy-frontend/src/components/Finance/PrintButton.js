import React from 'react'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@mui/material';
function PrintButton() {
  const { t } = useTranslation();

  function printDiv(divName) {
    var printContent = document.getElementById(divName).outerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContent;


    window.print();

    document.body.innerHTML = originalContents;

  }
  return (
    <div>
      <Tooltip title={t(`print`)} placement="bottom-end">
        <button onClick={() => printDiv("finance-table")} type="button" className="btn btn-outline-dark print-btn"><LocalPrintshopIcon /></button>
      </Tooltip>
    </div>
  )
}

export default PrintButton
