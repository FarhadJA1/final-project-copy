import React from 'react'
import { TextField } from '@mui/material'
import { useTranslation } from 'react-i18next';
function ResourceCreateBtn(props) {    
    const { t } = useTranslation();
    return (
        <div className='addition'>
            <div className="my-3 me-3 create-resource-btn-area">
                <button type="button" className="btn btn-outline-success create-resource-btn" data-bs-toggle="modal" data-bs-target="#create-resource">
                    {t("create resource")}
                </button>
            </div>

            <div className="modal fade" id="create-resource" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("please, enter resource")}</h5>
                            <button type="button" className="btn-close resource-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body row">
                            <TextField autoComplete='off' className='resource-input' onChange={(e) => props.setInput(e.target.value)} value={props.input} id="outlined-basic" label={t("resource")} variant="outlined" />
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.createResource()} value={props.input} data-bs-dismiss="modal" type="button" className="btn btn-outline-primary resource-button">{t("save")}</button>                            
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning resource-button">{t("cancel")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourceCreateBtn
