import { TextField } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
function CreateGroupType(props) {
  const { t } = useTranslation();
  return (
    <div className='addition'>
      <div className="my-3 me-3 create-education-btn-area">
        <button type="button" className="btn btn-outline-success create-education-btn" data-bs-toggle="modal" data-bs-target="#createEducation">
          {t("create education")}
        </button>
      </div>

      <div className="modal fade" id="createEducation" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{t("please, enter education")}</h5>
              <button type="button" className="btn-close education-button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body row">
              <TextField autoComplete='off' onChange={(e) => props.setInput(e.target.value)} value={props.input} id="outlined-basic" label={t("education type")} variant="outlined" />
            </div>
            <div className="modal-footer">
              <button onClick={() => props.createPayment()} type="button" data-bs-dismiss="modal" className="btn btn-outline-primary education-button">{t("save")}</button>
              <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning education-button">{t("cancel")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateGroupType
