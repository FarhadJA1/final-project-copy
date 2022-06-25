import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next'
function AddClassroom(props) {
    const { t } = useTranslation();
    return (
        <div className='row my-2 add-buttons-area addition'>
            <button type="button" onClick={(e) => props.setId(e.target.value)} value={props.id} className="btn btn-outline-success add-button" data-bs-toggle="modal" data-bs-target={'#add-classroom' + props.id}>{t("add classroom")}</button>


            <div className="modal fade" id={'add-classroom' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">{t("select classroom")}:</h5>
                            <button type="button" className="btn-close  add-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Box sx={{ width: 1 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">{t("classrooms")}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={props.classroomInput}
                                        label={t("classrooms")}
                                        onChange={(e) => props.setClassroomInput(e.target.value)}
                                        defaultValue=""
                                    >
                                        {props.classrooms.map(classroom => (
                                            <MenuItem key={classroom.id} value={classroom.id}>{classroom.name}</MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.addClassroom()} data-bs-dismiss="modal" type="button" className="btn btn-outline-primary group-btn">{t("save")}</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning group-btn">{t("cancel")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddClassroom
