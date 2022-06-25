import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { TextField, Tooltip } from '@mui/material'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
function StudentEditBtn(props) {
    const { t } = useTranslation();
    return (
        <div className='student-edit-area'>
            <Tooltip title={t("update student")} placement="bottom-end">
                <button type="button" onClick={(e) => props.setId(e.target.value)} value={props.value} className="btn btn-outline-warning student-button" data-bs-toggle="modal" data-bs-target={'#update-student' + props.id}><EditOutlinedIcon className='settings-button' /></button>
            </Tooltip>

            <div className="modal fade" id={'update-student' + props.id} tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">{t("update student")}</h5>
                            <button type="button" className="btn-close student-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body addition">
                            <h6 className='addition-title'>{t("personal info")}</h6>
                            <div className="row">
                                <div className="col-6">
                                    <TextField  onChange={(e) => props.setNameInput(e.target.value)} value={props.nameInput||''} className='student-input' id="outlined-basic" label={t("name")} variant="outlined" />
                                </div>
                                <div className="col-6">
                                    <TextField  onChange={(e) => props.setSurnameInput(e.target.value)} value={props.surnameInput||''} autoComplete="off" className='student-input' id="outlined-basic" label={t("surname")} variant="outlined" />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-6">
                                    <DatePicker
                                        selected={props.birthdayInput}
                                        onChange={date => props.setBirthdayInput(date)}
                                        className="student-birthday"
                                        dateFormat='dd/MM/yyyy'
                                        maxDate={new Date()}
                                        isClearable
                                        showYearDropdown
                                        scrollableMonthYearDropdown
                                        placeholderText={t("birthday")}
                                    />
                                </div>
                            </div>
                            <h6 className='mt-4 addition-title'>{t("contact")}</h6>
                            <div className="row">
                                <div className="col-6">
                                    <TextField autoComplete='off' onChange={(e) => props.setEmailInput(e.target.value)} value={props.emailInput||''} type='email' className='student-input' id="outlined-basic" label="Email" variant="outlined" />
                                </div>
                                <div className="col-6">
                                    <TextField autoComplete='off' onChange={(e) => props.setPhoneInput(e.target.value)} value={props.phoneInput||''} className='student-input' id="outlined-basic" label={t("phone")} variant="outlined" />
                                </div>
                            </div>
                            <h6 className="mt-4 addition-title">{t("educational")}</h6>
                            <div className="row">
                                <div className="col-6">
                                    <Box sx={{ width: 210 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">{t("payment")}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={props.paymentInput}
                                                label={t("payment")}
                                                onChange={(e)=>props.setPaymentInput(e.target.value)}
                                                defaultValue = ""
                                            >
                                                {props.payments.map(payment => (
                                                <MenuItem key={payment.id} value={payment.id}>{payment.name}</MenuItem>                                                
                                                ))}

                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="col-6">
                                    <Box sx={{ width: 210 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">{t("resource")}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={props.resourceInput}
                                                label={t("resource")}
                                                onChange={(e)=>props.setResourceInput(e.target.value)}
                                                defaultValue = ""
                                            >
                                                {props.resources.map(res=>(
                                                    <MenuItem key={res.id} value={res.id}>{res.name}</MenuItem>
                                                ))}                                               
                                               
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                            </div>
                            
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.updateStudent()} data-bs-dismiss="modal" type="button" className="btn btn-outline-primary student-button">{t("save")}</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning student-button">{t("cancel")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentEditBtn
