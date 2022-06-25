import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next';
function PaymentDeleteBtn(props) {
    const { t } = useTranslation();
    return (
        <div>
            <Tooltip title={t("delete payment")} placement="bottom-end">
                <button onClick={(e) => props.setId(e.target.value)} value={props.value} type="button" className="btn btn-outline-danger payment-button mx-2" data-bs-toggle="modal" data-bs-target="#delete-payment"><DeleteOutlineOutlinedIcon /></button>
            </Tooltip>

            <div className="modal fade" id="delete-payment" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close payment-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        {t("are you sure to permanently delete this payment type?")}
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-danger payment-button" onClick={() => props.deletePayment()}>{t("delete")}</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning payment-button">{t("cancel")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentDeleteBtn
