import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../assets/style/Group/GroupTable.scss'
import InfoButton from './InfoButton';
import DeleteButton from './DeleteButton';
import AddButton from './AddButton';

function GroupTable(props) {
  let count = 1
  const { t } = useTranslation();
  return (

    <table className="table table-hover">
      <thead>
        <tr>
          <th className='table-header' scope="col">#</th>
          <th className='table-header' scope="col">{t("group code")}</th>
          <th className='table-header' scope="col">{t("start date")}</th>
          <th className='table-header' scope="col">{t("expire date")}</th>
          <th className='table-header' scope="col">{t("teacher")}</th>
          <th className='table-header' scope="col">{t("classroom")}</th>
          <th className='table-header' scope="col">{t("students(total)")}</th>
          <th className='table-header' scope="col">{t("settings")}</th>
        </tr>
      </thead>
      <tbody>
        {props.groups.map(group => (
          <tr key={group.id}>
            <th className='table-header' align='center' scope="row">{count++}</th>
            <td className='table-header' align='center'>{group.groupCode}</td>
            <td className='table-header' align='center'>{group.createDate.substring(0,10).split("-").reverse().join("-")}</td>
            <td className='table-header' align='center'>{group.expireDate.substring(0,10).split("-").reverse().join("-")}</td>

            
            {(group.teacher == null) ? (
              <td className='group-code table-header text-danger' align='center'>{t("no teacher has been assigned")}.</td>
            ) : (<td className='table-header' align='center'>{group.teacher.name} {group.teacher.surname}</td>)
            }
            {(group.groupClassTerm?.classroom == null) ? (
              <td className='group-code table-header text-danger' align='center'>{t("no classroom has been assigned")}.</td>
            ) : (<td className='table-header' align='center'>{group.groupClassTerm.classroom.name}</td>)
            }
            <td className='table-header' align='center'>{group.students.length}</td>
            <th className='table-button-area' scope="col">
              <InfoButton 
              details={props.details} setDetails={props.setDetails} groupDetails={props.groupDetails}
              value={group.id} group={group} id={props.id} 
              />
              <DeleteButton id={props.id} value={group.id} setId={props.setId} deleteGroup={props.deleteGroup}/>              
              <AddButton 
              setId={props.setId} id={props.id} value={group.id}
              classrooms={props.classrooms} setClassrooms={props.setClassrooms}
              teachers={props.teachers} setTeachers={props.setTeachers}
              students={props.students} setStudents={props.setStudents}
              studentsInput={props.studentsInput} setStudentsInput={props.setStudentsInput}
              classroomInput={props.classroomInput} setClassroomInput={props.setClassroomInput}
              teacherInput={props.teacherInput} setTeacherInput={props.setTeacherInput}
              addStudents={props.addStudents}
              addTeacher={props.addTeacher} addClassroom={props.addClassroom}
              />
            </th>
          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default GroupTable
