import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { TextField, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next';
function EditEducation(props) {
    const { t } = useTranslation();
    return (
        <div className='addition'>
            <Tooltip title={t("update education")} placement="bottom-end">
                <button onClick={(e) => props.setId(e.target.value)} value={props.value} type="button" className="btn btn-outline-warning education-button" data-bs-toggle="modal" data-bs-target={'#edit-education' + props.id}><EditOutlinedIcon /></button>
            </Tooltip>

            <div className="modal fade" id={'edit-education' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">{t("update education")}</h5>
                            <button type="button" className="btn-close education-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body row">
                            <TextField autoComplete='off' onChange={(e) => props.setInput(e.target.value)} id="outlined-basic" label={t("education")} variant="outlined" />
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.updateEducation()} type="button" data-bs-dismiss="modal" className="btn btn-outline-primary education-button">{t("save")}</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning education-button">{t("cancel")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEducation


