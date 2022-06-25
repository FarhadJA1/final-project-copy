import React from 'react'
import StudentDeleteBtn from './StudentDeleteBtn'
import StudentEditBtn from './StudentEditBtn'
import StudentInfoBtn from './StudentInfoBtn'
import { useTranslation } from 'react-i18next';
function StudentsTable(props) {
    let count=1;
    const { t } = useTranslation();
    return (
        <div>
            <table className="table table-hover student-table">
                <thead>
                    <tr>
                        <th className='table-header' scope="col">#</th>
                        <th className='table-header' scope="col">{t("name")}</th>
                        <th className='table-header' scope="col">{t("surname")}</th>
                        <th className='table-header' scope="col">{t("birthday")}</th>
                        <th className='table-header' scope="col">{t("group code")}</th>
                        <th className='table-header' scope="col">{t("settings")}</th>
                    </tr>
                </thead>
                <tbody>
                    {props.students.map(student => (
                        <tr key={student.id}>
                            <th className='table-header' scope="row">{count++}</th>
                            <td className='table-header' align='center'>{student.name}</td>
                            <td className='table-header' align='center'>{student.surname}</td>
                            <td className='table-header' align='center'>{student.birthday.substring(0,10).split("-").reverse().join("-")}</td>
                            {(student.group?.groupCode == null) ? (
                                <td className='group-code text-danger' align='center'>{t("has not been assigned to a group.")}</td>
                            ) : (<td className='table-header' align='center'>{student.group?.groupCode}</td>)
                            }

                            <td className='table-button-area' align='center'>
                                <StudentInfoBtn 
                                student={student} id={props.id} 
                                value={student.id} setId={props.setId} 
                                details={props.details} setDetails={props.setDetails}
                                studentDetails={props.studentDetails}
                                />
                                <StudentDeleteBtn id={props.id} value={student.id} setId={props.setId} deleteStudent={props.deleteStudent} />
                                <StudentEditBtn 
                                    nameInput={props.nameInput} setNameInput={props.setNameInput}
                                    surnameInput={props.surnameInput} setSurnameInput={props.setSurnameInput}
                                    birthdayInput={props.birthdayInput} setBirthdayInput={props.setBirthdayInput}
                                    paymentInput={props.paymentInput} setPaymentInput={props.setPaymentInput}
                                    resourceInput={props.resourceInput} setResourceInput={props.setResourceInput}
                                    emailInput={props.emailInput} setEmailInput={props.setEmailInput}
                                    phoneInput={props.phoneInput} setPhoneInput={props.setPhoneInput}
                                    payments={props.payments} setPayment={props.setPayment}
                                    resources={props.resources} setResources={props.setResources} 
                                    updateStudent={props.updateStudent} 
                                    id={props.id} value={student.id} setId={props.setId}
                                    />
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    )
}

export default StudentsTable
