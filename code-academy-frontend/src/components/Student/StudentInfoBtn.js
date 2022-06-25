import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
function StudentInfoBtn(props) {
    const { t } = useTranslation();
    return (
        <div className='addition'>
            <Tooltip title={t("student details")} placement="bottom-end">
                <button onClick={(e) => props.studentDetails(props.value)} value={props.value} type="button" className="btn btn-outline-info student-button" data-bs-toggle="modal" data-bs-target={'#student-details' + props.id}><InfoOutlinedIcon /></button>
            </Tooltip>

            <div className="modal fade" id={'student-details' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">{t("student details")}</h5>
                            <button type="button" className="btn-close student-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body student-details-area">
                            <h5 className='addition-title'>{t("personal info")}</h5>
                            <h6 className='student-details-area-description'>- {t("name")}:  {props.details?.name}</h6>
                            <h6 className='student-details-area-description'>- {t("surname")}:  {props.details?.surname}</h6>
                            <h6 className='student-details-area-description'>- {t("birthday")}:  {props.details?.birthday.substring(0,10).split("-").reverse().join("-")}</h6>
                            <h5 className='addition-title'>{t("contact")}</h5>
                            <h6 className='student-details-area-description'>- Email:  {props.details?.email}</h6>
                            <h6 className='student-details-area-description'>- {t("phone")}:  {props.details?.phone}</h6>
                            <h5 className='addition-title'>{t("education stu")}</h5>
                            {(props.details?.isGraduated == true) ? (                                
                                <h6 className='student-details-area-description'>{t("status")}: {t("graduated")}</h6>
                            ) : (<h6 className='student-details-area-description'>- {t("status")}: {t("student")}</h6>)
                            }
                            {(props.details?.group?.groupCode == null) ? (                                
                                <h6 className='student-details-area-description text-danger'>- {t("group")}: {t("has not been assigned to a group")} .</h6>
                            ) : (<h6 className='student-details-area-description'>- {t("group")}:  {props.details?.group?.groupCode}</h6>)
                            }
                            <h6 className='student-details-area-description'>- {t("payment")}:  {props.details?.payType?.name}</h6>
                            <h6 className='student-details-area-description'>- {t("resource")}: {props.details?.resource?.name}</h6>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-primary student-button">{t("go back")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentInfoBtn
