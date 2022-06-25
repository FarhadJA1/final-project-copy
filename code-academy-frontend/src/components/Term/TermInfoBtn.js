import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
function TermInfoBtn(props) {
    let count = 1;
    const { t } = useTranslation();
    return (
        <div className='addition'>
            <div className="modal fade" id={'term-detail' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalToggleLabel">{t("hour details")}</h5>
                            <button type="button" className="btn-close term-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6 className='addition-title'>{t("day")}: {props.details?.day}</h6>
                            <br />
                            <h6 className='addition-title'>{t("shift")}: {props.details?.time}</h6>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-primary term-button" data-bs-target={'#term-group-details' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal">Open Group List</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={'term-group-details' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel2">{t("group list")}</h5>
                            <button type="button" className="btn-close term-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                {props.details?.groupClassTerms.map(gr => (
                                    <li className='term-groups-list'>
                                        <h5 className='addition-title'>
                                            <span>{count++} - </span>
                                            <span>{gr.group?.groupCode}</span>
                                        </h5>

                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-target={'#term-detail' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn-outline-primary term-button">{t("go back")}</button>
                        </div>
                    </div>
                </div>
            </div>

            <Tooltip title={t("hour details")} placement="bottom-end">
                <button onClick={() => props.hourDetails(props.value)} type="button" className="btn btn-outline-info term-button" data-bs-toggle="modal" data-bs-target={'#term-detail' + props.id}><InfoOutlinedIcon /></button>
            </Tooltip>
        </div>
    )
}

export default TermInfoBtn
