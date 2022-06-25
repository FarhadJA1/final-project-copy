import React from 'react'
import { TextField } from '@mui/material'
import { useTranslation } from 'react-i18next';
function ClassroomCreateBtn(props) {
  const { t } = useTranslation();
  return (
    <div className='addition'>
      <div className="my-3 me-3 create-classroom-btn-area">
        <button type="button" className="btn btn-outline-success create-classroom-btn" data-bs-toggle="modal" data-bs-target="#create-classroom">
          {t("create classroom")}
        </button>
      </div>

      <div className="modal fade" id="create-classroom" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{t("please fill the blank")}</h5>
              <button type="button" className="btn-close classroom-button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body classroom-modal-body">
              <TextField autoComplete='off' onChange={(e) => props.setNameInput(e.target.value)} value={props.nameInput} className='term-input' id="outlined-basic" label={t("name")} variant="outlined" />
              <span className='minus'>-</span>
              <TextField autoComplete='off' type="number" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0 }} onChange={(e) => props.setCapacityInput(e.target.value)} value={props.capacityInput} className='term-input' id="outlined-basic" label={t("capacity")} variant="outlined" />
            </div>
            <div className="modal-footer">
              <button onClick={() => props.createClassroom()} data-bs-dismiss="modal" type="button" className="btn btn-outline-primary classroom-button">{t("save")}</button>
              <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning classroom-button">{t("cancel")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassroomCreateBtn

