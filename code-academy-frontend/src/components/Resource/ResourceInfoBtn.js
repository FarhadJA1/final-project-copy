import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
function ResourceInfoBtn(props) {
    let count = 1;
    const { t } = useTranslation();
    return (
        <div className='addition'>
            <div className="modal fade" id={'resource-detail' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalToggleLabel">{t("resource details")}</h5>
                            <button type="button" className="btn-close resource-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6 className='addition-title'>{t("name")}: {props.details?.name}</h6>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-primary resource-button" data-bs-target={'#resource-student-details' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal">{t("student list")}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={'resource-student-details' + props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel2">{t("student list")}</h5>
                            <button type="button" className="btn-close resource-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                {props.details?.students.map(student => (
                                    <li className='resource-list-elements'>
                                        <h5 className='addition-title'>
                                            <span>{count++} - </span>
                                            <span>{student.name + " " + student.surname}</span>
                                        </h5>

                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-target={'#resource-detail' + props.id} data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn-outline-primary resource-button">{t("go back")}</button>
                        </div>
                    </div>
                </div>
            </div>

            <Tooltip title={t("resource details")} placement="bottom-end">
                <button onClick={() => props.resourceDetails(props.value)} type="button" className="btn btn-outline-info resource-button" data-bs-toggle="modal" data-bs-target={'#resource-detail' + props.id}><InfoOutlinedIcon /></button>

            </Tooltip>
        </div>
    )
}

export default ResourceInfoBtn
