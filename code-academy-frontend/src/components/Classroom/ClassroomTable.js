import React from 'react'
import ClassroomDeleteBtn from './ClassroomDeleteBtn'
import ClassroomEditBtn from './ClassroomEditBtn'
import ClassroomInfoBtn from './ClassroomInfoBtn'
import { useTranslation } from 'react-i18next';
function ClassroomTable(props) {
    let count = 1
    const { t } = useTranslation();
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className='table-header' scope="col">#</th>
                        <th className='table-header' scope="col">{t("name")}</th>
                        <th className='table-header' scope="col">{t("groups(total)")}</th>
                        <th className='table-header' scope="col">{t("capacity")}</th>
                        <th className='table-header' scope="col">{t("settings")}</th>
                    </tr>
                </thead>
                <tbody>
                    {props.classrooms.map(cl => (
                        <tr key={cl.id}>
                            <th className='table-header' scope="row">{count++}</th>
                            <td className='table-header' align='center'>{cl.name}</td>
                            <td className='table-header' align='center'>{cl.groupClassTerms.length}</td>
                            <td className='table-header' align='center'>{cl.capacity}</td>
                            <td className='table-button-area'>
                                <ClassroomInfoBtn details={props.details} setDetails={props.setDetails}  id={props.id} value={cl.id} setId={props.setId} classroomDetails={props.classroomDetails}/>
                                <ClassroomDeleteBtn id={props.id} value={cl.id} setId={props.setId} deleteClassroom={props.deleteClassroom}/>
                                <ClassroomEditBtn setNameInput={props.setNameInput} setCapacityInput={props.setCapacityInput} capacity={cl.capacity} name={cl.name} id={props.id} value={cl.id} setId={props.setId} updateClassroom={props.updateClassroom}/>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default ClassroomTable
