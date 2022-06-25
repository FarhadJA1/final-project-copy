import React from 'react'
import DatePicker from "react-datepicker";
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
function EmployeeCreateBtn(props) {
    const { t } = useTranslation();
    return (
        <div>
            <div className='employee-create-btn-area '>
                <button type="button" className="btn btn-outline-success employee-create-btn mt-3 mx-3" data-bs-toggle="modal" data-bs-target="#create-employee">
                    {t("hire employee")}
                </button>
            </div>



            <div className="modal fade" id="create-employee" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("please fill the blank")}</h5>
                            <button type="button" className="btn-close employee-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body  employee-modal-body">
                            <div>
                                <TextField onChange={(e) => props.setNameInput(e.target.value)} value={props.nameInput} className='ms-3' autoComplete='off' id="outlined-basic" label={t("name")} variant="outlined" />
                                <TextField onChange={(e) => props.setSurnameInput(e.target.value)} value={props.surnameInput} className='ms-3' autoComplete='off' id="outlined-basic" label={t("surname")} variant="outlined" />
                            </div>
                            <div>
                                <TextField onChange={(e) => props.setEmailInput(e.target.value)} value={props.emailInput} type='email' className='ms-3 mt-3' autoComplete='off' id="outlined-basic" label="Email" variant="outlined" />
                                <TextField onChange={(e) => props.setPhoneInput(e.target.value)} value={props.phoneInput} type='number' placeholder='Phone' className='ms-3 mt-3' autoComplete='off' id="outlined-basic" label="(+994)" variant="outlined" />
                            </div>


                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.CreateEmployee()} type="button" className="btn btn-outline-primary employee-btn" data-bs-dismiss="modal">{t("save")}</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning employee-btn">{t("cancel")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeCreateBtn
