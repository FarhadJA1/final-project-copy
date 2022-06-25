import React from 'react'
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useTranslation } from 'react-i18next'
function AddStudent(props) {
    const { t } = useTranslation();
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };


    return (
        <div className='row addition'>
            <button onClick={(e) => props.setId(e.target.value)} value={props.id} type="button" className="btn btn-outline-success group-btn add-button" data-bs-toggle="modal" data-bs-target={'#add-student' + props.id}>{t("add student")}</button>

            <div className="modal fade" id={'add-student' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">{t("add student")}</h5>
                            <button type="button" className="btn-close group-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <FormControl sx={{ width: 1 }}>
                                <InputLabel id="demo-multiple-chip-label">{t("students")}</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    value={props.studentsInput}
                                    onChange={(e) => props.setStudentsInput(e.target.value)}
                                    input={<OutlinedInput id="select-multiple-chip" label={t("students")} />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {props.students.map((student) => (
                                        <MenuItem
                                            key={student.id}
                                            value={student.id}
                                                                                   
                                        >
                                            {student.name} {student.surname}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.addStudents()} type="button" data-bs-dismiss="modal" className="btn btn-outline-primary group-btn">{t("save")}</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning group-btn">{t("cancel")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent
