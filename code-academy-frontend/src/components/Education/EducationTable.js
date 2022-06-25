import React from 'react'
import EditEducation from './EditEducation';
import DeleteEducation from './DeleteEducation';
import EducationDetails from './EducationDetails';
import { useTranslation } from 'react-i18next';
function EducationTable(props) {
    const { t } = useTranslation();
    let count = 1;
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className='table-header' scope="col">#</th>
                        <th className='table-header' scope="col">{t("type")}</th>
                        <th className='table-header' scope="col">{t("groups(total)")}</th>
                        <th className='table-header' scope="col">{t("settings")}</th>
                    </tr>
                </thead>
                <tbody>
                    {props.education.map(edu => (
                        <tr key={edu.id}>
                            <th className='table-header' scope="row">{count++}</th>
                            <td className='table-header' align='center'>{edu.name}</td>
                            <td className='table-header' align='center'>{edu.groups.length}</td>
                            <td className='table-button-area'>
                                <EducationDetails edu={edu} id={props.id} value={edu.id} setId={props.setId} details={props.details} educationDetails={props.educationDetails}/>
                                <DeleteEducation id={props.id} value={edu.id} setId={props.setId} deleteEducation={props.deleteEducation}/>
                                <EditEducation setInput={props.setInput} name={edu.name} id={props.id} value={edu.id} setId={props.setId} updateEducation={props.updateEducation}/>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    )
}

export default EducationTable
