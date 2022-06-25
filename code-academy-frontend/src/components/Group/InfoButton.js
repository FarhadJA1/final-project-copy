import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
function InfoButton(props) {
    const { t } = useTranslation();
    let count =1;
    return (
        <div className='addition'>
            <Tooltip title={t("group details")} placement="bottom-end">
                <button onClick={(e) => props.groupDetails(props.value)} type="button" className="btn btn-outline-info group-btn" data-bs-toggle="modal" data-bs-target={'#group-details' + props.id}><InfoOutlinedIcon /></button>
            </Tooltip>
            <div className="modal fade" id={'group-details' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">{t("group details")}</h5>
                            <button type="button" className="btn-close group-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5 className='addition-title'>{t("general info")}</h5>
                            <h6 className='group-details-area-description'>- {t("group code")}:  {props.details?.groupCode}</h6>
                            <h6 className='group-details-area-description'>- {t("education")}:  {props.details?.groupType?.name}</h6>
                            <h6 className='group-details-area-description'>- {t("start date")}:  {props.details?.createDate.substring(0, 10).split("-").reverse().join("-")}</h6>
                            <h6 className='group-details-area-description'>- {t("expire date")}:  {props.details?.expireDate.substring(0, 10).split("-").reverse().join("-")}</h6>
                            <h6 className='group-details-area-description'>- {t("capacity")}:  {props.details?.capacity}</h6>
                            {(props.details?.isOver == true) ? (
                                <h6 className='group-details-area-description text-danger'>{t("status")}: Is over</h6>
                            ) : (<h6 className='group-details-area-description'>- {t("status")}: In progress</h6>)
                            }
                            <h5 className='addition-title'>{t("additional")}</h5>
                            {(props.details?.teacher == null) ? (
                                <h6 className='group-details-area-description'>- {t("teacher")}: {t("no teacher has been assigned")}.</h6>
                            ) : (<h6 className='group-details-area-description'>- {t("teacher")}: {props.details?.teacher?.name} {props.details?.teacher?.surname}</h6>)
                            }
                            {(props.details?.groupClassTerm?.classroom == null && props.details?.groupClassTerm?.term == null) ? (
                                <h6 className='group-details-area-description'>- {t("classroom")}: {t("no classroom has been assigned")}.</h6>
                            ) : (<h6 className='group-details-area-description'>- {t("classroom")}: {props.details?.groupClassTerm?.classroom?.name} (at {props.details?.groupClassTerm?.term?.day} - {props.details?.groupClassTerm?.term?.time})</h6>)
                            }
                            
                            <h6 className='group-details-area-description'>-{t("students")}:</h6>
                            {(props.details?.students?.length < 1) ? (
                                <h6 className='group-details-area-description'>- {t("no students have been assigned")}.</h6>
                            ) : (props.details?.students.map(student => (
                                <h6 className='group-details-area-students'>{count++} - {student.name} {student.surname}</h6>)
                            ))}



                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-primary group-btn">{t("go back")}</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoButton
