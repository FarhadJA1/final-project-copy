import React from 'react'
import ResourceDeleteBtn from './ResourceDeleteBtn'
import ResourceEditBtn from './ResourceEditBtn'
import ResourceInfoBtn from './ResourceInfoBtn'
import { useTranslation } from 'react-i18next';
function ResourceTable(props) {  
    let count = 1;
    const { t } = useTranslation();
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className='table-header' align='center' scope="col">#</th>
                        <th className='table-header' align='center' scope="col">{t("resource")}</th>
                        <th className='table-header' align='center' scope="col">{t("students(total)")}</th>
                        <th className='table-header' scope="col">{t("settings")}</th>
                    </tr>
                </thead>
                <tbody>
                    {props.resources.map(resource => (
                        <tr key={resource.id}>  
                                              
                            <th className='table-header' scope="row">{count++}</th>
                            <td className='table-header' align='center'>{resource.name}</td>
                            <td className='table-header' align='center'>{resource.students.length}</td>
                            <td  className='table-button-area' align='center'>
                                <ResourceInfoBtn resource={resource} id={props.id} value={resource.id} setId={props.setId} details={props.details} resourceDetails={props.resourceDetails}/>
                                <ResourceDeleteBtn id={props.id} value={resource.id} setId={props.setId} deleteResource={props.deleteResource}/>
                                <ResourceEditBtn setInput={props.setInput} name={resource.name} id={props.id} value={resource.id} setId={props.setId} updateResource={props.updateResource}/>
                            </td>
                        </tr>
                        
                    ))                    
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ResourceTable
