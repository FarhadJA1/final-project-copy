import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
function PaymentInfoBtn(props) {
    let count = 1;
    const { t } = useTranslation();
    return (
        <div className='addition'>
            <div className="modal fade" id={'payment-detail' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalToggleLabel">{t("payment details")}</h5>
                            <button type="button" className="btn-close payment-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6 className='addition-title'>{t("name")}: {props.details?.name}</h6>
                        </div>
                        <div className="modal-footer">                           
                            <button className="btn btn-outline-primary payment-button" data-bs-target={'#payment-student-details' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal">{t("open student list")}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={'payment-student-details' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel2">{t("student list")}</h5>
                            <button type="button" className="btn-close payment-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                {props.details?.students.map(student => (
                                    <li className='payment-list-elements'>
                                        <h5 className='addition-title'>
                                            <span>{count++} - </span>
                                            <span>{student.name + " " + student.surname}</span>
                                        </h5>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-target={'#payment-detail' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn-outline-primary payment-button">{t("go back")}</button>
                        </div>
                    </div>
                </div>
            </div>

            <Tooltip title={t("payment details")} placement="bottom-end">
                <button onClick={() => props.paymentDetails(props.value)} type="button" className="btn btn-outline-info payment-button" data-bs-toggle="modal" data-bs-target={'#payment-detail' + props.id}><InfoOutlinedIcon /></button>

            </Tooltip>
        </div>
    )
}

export default PaymentInfoBtn
