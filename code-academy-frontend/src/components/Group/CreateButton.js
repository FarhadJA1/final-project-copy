import { React, useState } from 'react'
import '../../assets/style/Group/CreateBtn.scss'
import { TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from 'react-i18next';
function CreateButton(props) {
  const { t } = useTranslation();
  return (
    <div className="create-btn-area addition">
      <div className="my-3 me-3">
        <button type="button" className="btn btn-outline-success create-btn" data-bs-toggle="modal" data-bs-target="#createGroup">
          {t("create group")}
        </button>
      </div>

      <div className="modal fade" id="createGroup" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title addition-title" id="staticBackdropLabel">{t("please, select group details")}</h5>
              <button type="button" className="btn-close create-btn group-btn" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body create-modal">
              <div className='group-drop'>
                <FormControl sx={{ width: 0.99 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">{t("education")}</InputLabel>
                  <Select

                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={props.educationInput}
                    onChange={(e) => props.setEducationInput(e.target.value)}
                    label={t("education")}
                    defaultValue=""
                  >
                    {props.education.map(edu => (
                      <MenuItem key={edu.id} onChange={(e) => props.setGroupTypeNameInput(e.target.value)} value={edu.id}>{edu.name}</MenuItem>
                    ))}

                  </Select>
                </FormControl>
              </div>
              <div className="row mt-2">
                <div className="col-6 mt-1">
                  <DatePicker
                    selected={props.createDateInput}
                    onChange={date => props.setCreateDateInput(date)}
                    className="group-create-date"
                    dateFormat='dd/MM/yyyy'
                    minDate={new Date()}
                    isClearable
                    showYearDropdown
                    scrollableMonthYearDropdown
                    placeholderText={t("group starts")}
                  />
                </div>
                <div className="col-6 mt-3">
                  <TextField autoComplete='off' onChange={(e) => props.setCapacityInput(e.target.value)} value={props.capacityInput} type='number' id="outlined-basic" label={t("capacity")} variant="outlined" />
                </div>
              </div>
            </div>
            <div className='group-drop mb-4'>
              <FormControl sx={{ width: 0.93 }}>
                <InputLabel id="demo-simple-select-autowidth-label">{t("hour")}</InputLabel>
                <Select

                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={props.termInput}
                  onChange={(e) => props.setTermInput(e.target.value)}
                  label={t("hour")}
                >
                  {props.hours.map(hour => (
                    <MenuItem key={hour.id} value={hour.id}>{hour.day} - {hour.time}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="modal-footer">
              <button onClick={() => props.createGroup()} type="button" data-bs-dismiss="modal" className="btn btn-outline-primary create-btn group-btn">{t("save")}</button>
              <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning group-btn">{t("cancel")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateButton
