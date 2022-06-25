import React from 'react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddStudent from './AddStudent';
import AddClassroom from './AddClassroom';
import AddTeacher from './AddTeacher';
import { Tooltip } from '@mui/material';
import '../../assets/style/Group/AddButtons.scss'
import { useTranslation } from 'react-i18next'
function AddButton(props) {
    const { t } = useTranslation();
    return (
        <div className='ms-1 addition'>
            <Tooltip title={t("operations")} placement="bottom-end">
                <button onClick={(e) => props.setId(e.target.value)} value={props.value} type="button" className="btn btn-outline-success group-btn" data-bs-toggle="modal" data-bs-target={'#add-button' + props.id}><AddCircleOutlineOutlinedIcon /></button>
            </Tooltip>
            <div className="modal fade" id={'add-button' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title addition-title" id="exampleModalLabel">{t("operations")}</h5>
                            <button type="button" className="btn-close group-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body add-buttons-area">
                            <AddStudent 
                            setId={props.setId} id={props.id} value={props.value}
                            students={props.students} setStudents={props.setStudents}
                            studentsInput={props.studentsInput} setStudentsInput={props.setStudentsInput}
                            addStudents={props.addStudents}
                            />
                            <AddClassroom 
                            setId={props.setId} id={props.id} value={props.value}
                            classrooms={props.classrooms} setClassrooms={props.setClassrooms}
                            classroomInput={props.classroomInput} setClassroomInput={props.setClassroomInput}
                            addClassroom={props.addClassroom}
                            />                            
                            <AddTeacher 
                            setId={props.setId} id={props.id} value={props.value}
                            teachers={props.teachers} setTeachers={props.setTeachers}
                            teacherInput={props.teacherInput} setTeacherInput={props.setTeacherInput}
                            addTeacher={props.addTeacher}
                            />
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

export default AddButton
