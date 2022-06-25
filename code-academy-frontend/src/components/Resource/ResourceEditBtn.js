import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { TextField, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next';
function ResourceEditBtn(props) {
    const { t } = useTranslation();
    return (
        <div className='addition'>
            <Tooltip title={t("update resource")} placement="bottom-end">
                <button type="button" onClick={(e) => props.setId(e.target.value)} value={props.value} className="btn btn-outline-warning resource-button" data-bs-toggle="modal" data-bs-target={'#update-resource' + props.id}><EditOutlinedIcon className='settings-button' /></button>
            </Tooltip>

            <div className="modal fade" id={'update-resource' + props.id} tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">{t("update resource")}</h5>
                            <button type="button" className="btn-close resource-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body row">
                            <TextField autoComplete='off' className='resource-input' onChange={(e) => props.Input(e.target.value)} id="outlined-basic" label={t("name")} variant="outlined" />
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-primary resource-button" onClick={() => props.updateResource()}>{t("save")}</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning resource-button">{t("cancel")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourceEditBtn
