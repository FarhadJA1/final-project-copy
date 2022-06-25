import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
function ClassroomInfoBtn(props) {
    let count = 1;
    const { t } = useTranslation();
    return (
        <div className='addition'>
            <div className="modal fade" id={'classroom-detail' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalToggleLabel">{t("classroom details")}</h5>
                            <button type="button" className="btn-close classroom-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body classroom-info-area">
                            <h6 className='addition-title'>{t("name")}: {props.details?.name}</h6>
                            <br />
                            <h6 className='addition-title'>{t("capacity")}: {props.details?.capacity}</h6>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-primary classroom-button" data-bs-target={'#classroom-group-details' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal">{t("group list")}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={'classroom-group-details' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel2">{t("group list")}</h5>
                            <button type="button" className="btn-close classroom-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <ul className='classroom-info-area'>
                                {props.details?.groupClassTerms.map(gr => (
                                    <li className='classroom-list-elements'>
                                        <h5 className='addition-title'>
                                            <span>{count++} - </span>
                                            <span>{gr.group?.groupCode}</span>
                                        </h5>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-target={'#classroom-detail' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn-outline-primary classroom-button">{t("go back")}</button>
                        </div>
                    </div>
                </div>
            </div>

            <Tooltip title={t("classroom details")} placement="bottom-end">
                <button onClick={() => props.classroomDetails(props.value)} type="button" className="btn btn-outline-info classroom-button" data-bs-toggle="modal" data-bs-target={'#classroom-detail' + props.id}><InfoOutlinedIcon /></button>

            </Tooltip>
        </div>
    )
}

export default ClassroomInfoBtn
