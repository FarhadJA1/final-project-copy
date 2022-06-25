import React from 'react'
import { TextField } from '@mui/material'
import { useTranslation } from 'react-i18next';
function TermCreateBtn(props) {
    const { t } = useTranslation();
    return (
        <div className='addition'>
            <div className='create-btn-area my-3 me-3'>
                <button type="button" className="btn btn-outline-success create-btn" data-bs-toggle="modal" data-bs-target="#create-term">
                    {t("create hour")}
                </button>
            </div>


            <div className="modal fade" id="create-term" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title create-header" id="exampleModalLabel">{t("please fill the blank")}</h5>
                            <button type="button" className="btn-close term-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body term-modal-body">
                            <TextField autoComplete='off' onChange={(e) => props.setDayInput(e.target.value)} value={props.dayInput} className='term-input' id="outlined-basic" label={t("day")} variant="outlined" />
                            <span className='minus'>-</span>
                            <TextField autoComplete='off' onChange={(e) => props.setTimeInput(e.target.value)} value={props.timeInput} className='term-input' id="outlined-basic" label={t("shift")} variant="outlined" />
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.createHour()} type="button" data-bs-dismiss="modal" className="btn btn-outline-primary term-button">{t("save")}</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning term-button">{t("cancel")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermCreateBtn
