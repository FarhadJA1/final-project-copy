import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next'
function AddTeacher(props) {
    const { t } = useTranslation();
    return (
        <div className='row addition'>
            <button onClick={(e) => props.setId(e.target.value)} value={props.id} type="button" className="btn btn-outline-success group-btn" data-bs-toggle="modal" data-bs-target={'#add-teacher' + props.id}>{t("add teacher")}</button>

            <div className="modal fade" id={'add-teacher' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">                            
                            <h5 className="modal-title addition-title" id="exampleModalLabel">{t("select teacher")}:</h5>
                            <button type="button" className="btn-close group-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Box sx={{ width: 1 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">{t("teachers")}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={props.teacherInput}
                                        label={t("teachers")}
                                        onChange={(e) => props.setTeacherInput(e.target.value)}
                                        defaultValue=""
                                    >
                                        {props.teachers.map(teacher=>(
                                                    <MenuItem key={teacher.id} value={teacher.id}>{teacher.name} {teacher.surname} - {teacher.profession.name}</MenuItem>
                                                ))}                                               

                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.addTeacher()} type="button" data-bs-dismiss="modal" className="btn btn-outline-primary group-btn">{t("save")}</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning group-btn">{t("cancel")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTeacher
