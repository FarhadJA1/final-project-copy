import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
function TeacherInfo(props) {
    let count =1;
    const { t } = useTranslation();
    return (
        <div className='addition'>
            <Tooltip title={t("teacher details")} placement="bottom-end">
                <button onClick={(e) => props.teacherDetails(props.value)} type="button" className="btn btn-outline-info teacher-button" data-bs-toggle="modal" data-bs-target={'#teacher-details' + props.id}><InfoOutlinedIcon /></button>
            </Tooltip>
            <div className="modal fade" id={'teacher-details' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">{t("teacher details")}</h5>
                            <button type="button" className="btn-close teacher-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5 className='addition-title'>{t("personal info")}</h5>
                            <h6 className='teacher-details-area-description'>- {t("name")}:  {props.details?.name}</h6>
                            <h6 className='teacher-details-area-description'>- {t("surname")}:  {props.details?.surname}</h6>
                            <h6 className='teacher-details-area-description'>- {t("birthday")}:  {props.details?.birthday.substring(0, 10).split("-").reverse().join("-")}</h6>
                            <h5 className='addition-title'>{t("contact")}</h5>
                            <h6 className='teacher-details-area-description'>- Email:  {props.details?.email}</h6>
                            <h6 className='teacher-details-area-description'>- {t("phone")}:  {props.details?.phone}</h6>
                            <h5 className='addition-title'>{t("work details")}</h5>
                            <h6 className='teacher-details-area-description'>- {t("groups")}:</h6>
                            {
                                (props.details?.groups?.length==0)?(
                                <h6 className='teacher-details-area-description text-danger'>{t("has not been assigned to a group")}.</h6>
                                ):
                                (props.details?.groups?.map(group=>(                                    
                                    <h6 className='teacher-details-area-groups'>{count++} - {group?.groupCode}</h6>
                                )))
                            }
                            <h6 className='teacher-details-area-description'>- {t("profession")}:  {props.details?.profession?.name}</h6>
                            <h6 className='teacher-details-area-description'>- {t("salary")}: {props.details?.salary}</h6>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-primary teacher-button">{t("go back")}</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherInfo
