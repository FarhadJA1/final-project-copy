import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { TextField } from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
function TeacherEdit(props) {
    const { t } = useTranslation();
    return (
        <div className='create-btn-area'>
            <Tooltip title={t("update teacher")} placement="bottom-end">
                <button onClick={(e) => props.setId(e.target.value)} value={props.value} type="button" className="btn btn-outline-warning teacher-button" data-bs-toggle="modal" data-bs-target={'#update-teacher' + props.id}><EditOutlinedIcon className='settings-button' /></button>
            </Tooltip>

            <div className="modal fade" id={'update-teacher' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title create-header" id="exampleModalLabel">{t("please fill the blank")}</h5>
                            <button type="button" className="btn-close teacher-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body container addition">
                            <h6 className='addition-title'>{t("personal info")}</h6>
                            <div className="row">
                                <div className="col-6">
                                    <TextField autoComplete='off' onChange={(e) => props.setNameInput(e.target.value)} value={props.nameInput} className='teacher-input' id="outlined-basic" label={t("name")} variant="outlined" />
                                </div>
                                <div className="col-6">
                                    <TextField  onChange={(e) => props.setSurnameInput(e.target.value)} value={props.surnameInput} autoComplete="off" className='teacher-input' id="outlined-basic" label={t("surname")} variant="outlined" />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-6">
                                    <DatePicker
                                        selected={props.birthdayInput}
                                        onChange={date => props.setBirthdayInput(date)}
                                        className="teacher-birthday"
                                        dateFormat='dd/MM/yyyy'
                                        maxDate={new Date()}
                                        isClearable
                                        showYearDropdown
                                        scrollableMonthYearDropdown
                                        placeholderText={t("birthday")}
                                    />
                                </div>
                                <div className="col-6 mt-3">
                                    <TextField autoComplete='off' type='number' onChange={(e) => props.setSalaryInput(e.target.value)} value={props.salaryInput} className='teacher-input' id="outlined-basic" label={t("salary")} variant="outlined" />
                                </div>
                            </div>
                            <h6 className='mt-4 addition-title'>{t("contact")}</h6>
                            <div className="row">
                                <div className="col-6">
                                    <TextField autoComplete='off' onChange={(e) => props.setEmailInput(e.target.value)} value={props.emailInput} type='email' className='teacher-input' id="outlined-basic" label="Email" variant="outlined" />
                                </div>
                                <div className="col-6">
                                    <TextField autoComplete='off' type='number' onChange={(e) => props.setPhoneInput(e.target.value)} value={props.phoneInput} className='teacher-input' id="outlined-basic" label={t("phone")} variant="outlined" />
                                </div>
                            </div>
                            <h6 className='addition-title mt-4'>{t("qualifications")}</h6>
                            <div className='row teacher-profession-input'>
                                <Box sx={{ width: 0.98 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">{t("profession")}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={props.professionInput}
                                            label={t("profession")}
                                            onChange={(e) => props.setProfessionInput(e.target.value)}
                                            defaultValue=""

                                        >
                                            {props.professions.map(pro => (
                                                <MenuItem key={pro.id} value={pro.id}>{pro.name}</MenuItem>
                                            ))}


                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.updateTeacher()} type="button" data-bs-dismiss="modal" className="btn btn-outline-primary teacher-button">{t("save")}</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning teacher-button">{t("cancel")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherEdit
