import React from 'react';
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
function PaymentCreateButton(props) {
  const { t } = useTranslation();
  return (
    <div className='addition'>
      <div className="my-3 me-3 create-payment-btn-area">
        <button type="button" className="btn btn-outline-success create-payment-btn" data-bs-toggle="modal" data-bs-target="#create-payment">
          {t("create payment option")}
        </button>
      </div>
        
      <div className="modal fade" id="create-payment" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{t("please, enter payment option:")}</h5>
              <button type="button" className="btn-close payment-button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body row">
              <TextField autoComplete='off' id="outlined-basic" className='payment-textarea' onChange={(e) => props.setInput(e.target.value)} value={props.input} label={t("payment type")} variant="outlined" />
            </div>
            <div className="modal-footer">
              <button type="button" onClick={() => props.createPayment()} data-bs-dismiss="modal" className="btn btn-outline-primary payment-button">{t("save")}</button>
              <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning payment-button">{t("cancel")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentCreateButton
