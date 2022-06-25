import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
function EducationDetails(props) {
    const { t } = useTranslation();
    let count = 1;
    return (
        <div className='addition'>
            <div className="modal fade" id={'education-detail' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalToggleLabel">{t("education details")}</h5>
                            <button type="button" className="btn-close education-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body education-list-elements">
                            <h6 className='addition-title'>{t("name")}: {props.details?.name}</h6>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-primary education-button" data-bs-target={'#education-group-details' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal">Open Group List</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={'education-group-details' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel2">{t("group list")}</h5>
                            <button type="button" className="btn-close education-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                {props.details?.groups.map(group => (
                                    <li className='education-list-elements' key={group.id}>
                                        <h5 className='addition-title'>
                                            <span>{count++} - </span>
                                            <span>{group.groupCode}</span>
                                        </h5>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-target={'#education-detail' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn-outline-primary education-button">{t("go back")}</button>
                        </div>
                    </div>
                </div>
            </div>

            <Tooltip title={t("education details")} placement="bottom-end">
                <button onClick={() => props.educationDetails(props.value)} type="button" className="btn btn-outline-info education-button" data-bs-toggle="modal" data-bs-target={'#education-detail' + props.id}><InfoOutlinedIcon /></button>

            </Tooltip>
        </div>
    )
}

export default EducationDetails
